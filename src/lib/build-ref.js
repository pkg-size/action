import fs from 'fs';
import { addPath } from '@actions/core';
import * as log from './log.js';
import exec from './exec.js';
import npmCi from './npm-ci.js';
import isFileTracked from './is-file-tracked.js';
import { c, link } from './markdown.js';

let pkgSizeInstalled = false;

async function buildRef({
	checkoutRef,
	refData,
	buildCommand,
}) {
	const cwd = process.cwd();

	log.info(`Current working directory: ${cwd}`);

	if (checkoutRef) {
		// const temporaryDir = await createTempDirectory();
		log.info(`Checking out ref '${checkoutRef}'`);
		await exec(`git checkout -f ${checkoutRef}`);
		/*
		 * For parallel builds
		 * Since this doesn't make it a git repo, installing some deps like husky fails
		 */
		// await exec(`git --work-tree="${temporaryDir}" checkout -f origin/${ref} -- .`);

		// cwd = temporaryDir;
		// log.info('Changed working directory', cwd);
	}

	if (buildCommand !== 'false') {
		if (!buildCommand) {
			let pkgJson;
			try {
				pkgJson = JSON.parse(fs.readFileSync('./package.json'));
			} catch (error) {
				log.warning('Error reading package.json', error);
			}

			if (pkgJson && pkgJson.scripts && pkgJson.scripts.build) {
				log.info('Build script found in package.json');
				buildCommand = 'npm run build';
			}
		}

		if (buildCommand) {
			await npmCi({ cwd }).catch((error) => {
				throw new Error(`Failed to install dependencies:\n${error.message}`);
			});

			log.info(`Running build command: ${buildCommand}`);
			await exec(buildCommand, { cwd }).catch((error) => {
				throw new Error(`Failed to run build command: ${buildCommand}\n${error.message}`);
			});
		}
	}

	if (!pkgSizeInstalled) {
		log.info('Installing pkg-size globally');
		await exec('yarn global add pkg-size');
		addPath((await exec('yarn global bin')).stdout.trim());
		pkgSizeInstalled = true;
	}

	log.info('Getting package size');
	const result = await exec('pkg-size --json', { cwd }).catch((error) => {
		throw new Error(`Failed to determine package size: ${error.message}`);
	});
	log.debug(JSON.stringify(result, null, 4));

	const pkgData = JSON.parse(result.stdout);

	pkgData.ref = refData;

	await Promise.all(pkgData.files.map(async (file) => {
		const isTracked = await isFileTracked(`.${file.path}`);
		file.isTracked = isTracked;
		file.label = (
			isTracked
				? link(c(file.path), `${refData.ref.repo.html_url}/blob/${refData.ref.ref}${file.path}`)
				: c(file.path)
		);
	}));

	log.info('Cleaning up');
	await exec('git reset --hard'); // Reverts changed files
	const { stdout: cleanList } = await exec('git clean -dfx'); // Deletes untracked & ignored files
	log.debug(cleanList);

	return pkgData;
}

export default buildRef;
