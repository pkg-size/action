import * as core from '@actions/core';
import {context} from '@actions/github';
import {rmRF} from '@actions/io';
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import generateComment from './generate-comment';
import exec from './utils/exec';
import {sub} from './utils/markdown';
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

async function npmCi({cwd}) {
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

	const sizeData = JSON.parse(result.stdout);

	core.info('Cleaning up');
	await exec('git reset --hard'); // Reverts changed files
	const {stdout: cleanList} = await exec('git clean -dfx'); // Deletes untracked & ignored files
	core.debug(cleanList);

	return sizeData;
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

	core.startGroup('Build BASE');
	const headSizeData = await buildRef({
		buildCommand,
	});
	headSizeData.ref = pr.head;
	core.endGroup();

	const {ref: baseRef} = pr.base;
	let baseSizeData;
	if (await isBaseDiffFromHead(baseRef)) {
		core.info('HEAD is different from BASE. Triggering build.');
		core.startGroup('Build HEAD');
		baseSizeData = await buildRef({
			ref: baseRef,
			buildCommand,
		});
		baseSizeData.ref = pr.base;
		core.endGroup();
	} else {
		core.info('HEAD is identical to BASE. No need to build.');
		baseSizeData = {
			...headSizeData,
			ref: pr.base,
		};
	}

	core.setOutput('headSizeData', headSizeData);
	core.setOutput('baseSizeData', baseSizeData);

	if (commentReport !== 'false') {
		await upsertComment({
			token: GITHUB_TOKEN,
			commentSignature: COMMENT_SIGNATURE,
			repo: context.repo,
			prNumber: pr.number,
			body: generateComment({
				commentSignature: COMMENT_SIGNATURE,
				unchangedFiles,
				hideFiles,
				sortBy,
				sortOrder,
				baseSizeData,
				headSizeData,
			}),
		});
	}
})().catch(error => {
	core.setFailed(error.message);
});
