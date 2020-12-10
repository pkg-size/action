import * as core from '@actions/core';
import {context} from '@actions/github';
import {rmRF} from '@actions/io';
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import generateComment from './templates';
import exec from './utils/exec';
import {sub} from './utils/markdown';
import comparePackages from './utils/compare-packages';
import upsertComment from './utils/upsert-comment';

// import {createTempDirectory} from '@actions/cache/lib/internal/cacheUtils';

const COMMENT_SIGNATURE = sub('🤖 This report was automatically generated by [pkg-size-action](https://github.com/privatenumber/pkg-size-action/)');

/*
 * Compares files between current ref and the base ref (not commits)
 * The clean up (git reset --hard) that happens is crucial as it
 * takes into consideration uncommitted files
 */
async function isBaseDiffFromHead(baseRef) {
	try {
		await exec(`git fetch origin ${baseRef} --depth=1`);
	} catch (error) {
		throw new Error(`Failed to git fetch ${baseRef} ${error.message}`);
	}

	const {exitCode} = await exec(`git diff --quiet origin/${baseRef}`, {ignoreReturnCode: true});
	return exitCode !== 0;
}

async function npmCi({cwd} = {}) {
	if (fs.existsSync('node_modules')) {
		core.info('Cleaning node_modules');
		await rmRF(path.join(cwd, 'node_modules'));
	}

	if (fs.existsSync('package-lock.json')) {
		core.info('Installing dependencies with npm');
		return await exec('npm ci', {cwd});
	}

	if (fs.existsSync('pnpm-lock.yaml')) {
		core.info('Installing dependencies with pnpm');
		return await exec('npx pnpm i --frozen-lockfile', {cwd});
	}

	if (fs.existsSync('yarn.lock')) {
		core.info('Installing dependencies with yarn');
		return await exec('npx yarn install --frozen-lockfile', {cwd});
	}

	core.info('No lock file detected. Installing dependencies with npm');
	return await exec('npm i', {cwd});
}

async function isFileTracked(filePath) {
	const {exitCode} = await exec(`git ls-files --error-unmatch ${filePath}`, {ignoreReturnCode: true});
	return exitCode === 0;
}

async function buildRef({
	ref,
	buildCommand,
}) {
	const cwd = process.cwd();

	core.info(`Current working directory: ${cwd}`);

	if (ref) {
		// const temporaryDir = await createTempDirectory();
		core.info(`Checking out ref '${ref}'`);
		await exec(`git checkout -f ${ref}`);
		/*
		 * For parallel builds
		 * Since this doesn't make it a git repo, installing some deps like husky fails
		 */
		// await exec(`git --work-tree="${temporaryDir}" checkout -f origin/${ref} -- .`);

		// cwd = temporaryDir;
		// log('Changed working directory', cwd);
	}

	if (buildCommand !== 'false') {
		if (!buildCommand) {
			let pkgJson;
			try {
				pkgJson = JSON.parse(fs.readFileSync('./package.json'));
			} catch (error) {
				core.warning('Error reading package.json', error);
			}

			if (pkgJson && pkgJson.scripts && pkgJson.scripts.build) {
				core.info('Build script found in package.json');
				buildCommand = 'npm run build';
			}
		}

		if (buildCommand) {
			await npmCi({cwd}).catch(error => {
				throw new Error(`Failed to install dependencies:\n${error.message}`);
			});

			core.info(`Running build command: ${buildCommand}`);
			await exec(buildCommand, {cwd}).catch(error => {
				throw new Error(`Failed to run build command: ${buildCommand}\n${error.message}`);
			});
		}
	}

	core.info('Getting package size');
	const result = await exec('npx pkg-size --json', {cwd}).catch(error => {
		throw new Error(`Failed to determine package size: ${error.message}`);
	});
	core.debug(JSON.stringify(result, null, 4));

	const pkgData = JSON.parse(result.stdout);

	await Promise.all(pkgData.files.map(async file => {
		file.isTracked = await isFileTracked('.' + file.path);
	}));

	core.info('Cleaning up');
	await exec('git reset --hard'); // Reverts changed files
	const {stdout: cleanList} = await exec('git clean -dfx'); // Deletes untracked & ignored files
	core.debug(cleanList);

	return pkgData;
}

(async () => {
	const {GITHUB_TOKEN} = process.env;
	assert(GITHUB_TOKEN, 'Environment variable "GITHUB_TOKEN" not set. Required for accessing and reporting on the PR.');

	const {pull_request: pr} = context.payload;
	const buildCommand = core.getInput('build-command');
	const commentReport = core.getInput('comment-report');
	const unchangedFiles = core.getInput('unchanged-files') || 'collapse';
	const hideFiles = core.getInput('hide-files');
	const sortBy = core.getInput('sort-by') || 'delta';
	const sortOrder = core.getInput('sort-order') || 'desc';

	core.startGroup('Build HEAD');
	const headPkgData = await buildRef({
		buildCommand,
	});
	headPkgData.ref = pr.head;
	core.endGroup();

	const {ref: baseRef} = pr.base;
	let basePkgData;
	if (await isBaseDiffFromHead(baseRef)) {
		core.info('HEAD is different from BASE. Triggering build.');
		core.startGroup('Build BASE');
		basePkgData = await buildRef({
			ref: baseRef,
			buildCommand,
		});
		basePkgData.ref = pr.base;
		core.endGroup();
	} else {
		core.info('HEAD is identical to BASE. No need to build.');
		basePkgData = {
			...headPkgData,
			ref: pr.base,
		};
	}

	const pkgComparison = comparePackages(headPkgData, basePkgData, {
		sortBy,
		sortOrder,
		hideFiles,
	});

	console.log('head', JSON.stringify(headPkgData, null, 4));
	console.log('base', JSON.stringify(basePkgData, null, 4));

	core.setOutput('headPkgData', headPkgData);
	core.setOutput('basePkgData', basePkgData);
	core.setOutput('pkgComparison', pkgComparison);

	console.log('pkgComparison', JSON.stringify(pkgComparison, null, 4));

	if (commentReport !== 'false') {
		await upsertComment({
			token: GITHUB_TOKEN,
			commentSignature: COMMENT_SIGNATURE,
			repo: context.repo,
			prNumber: pr.number,
			body: generateComment({
				unchangedFiles,
				sortBy,
				sortOrder,
				pkgComparison,
			}),
		});
	}
})().catch(error => {
	core.setFailed(error.message);
});
