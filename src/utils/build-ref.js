import fs from 'fs';
import {
	addPath,
	debug,
	warning,
	info as log,
} from '@actions/core';
import exec from './exec.js';
import npmCi from './npm-ci.js';
import isFileTracked from './is-file-tracked.js';

let pkgSizeInstalled = false;

async function buildRef({
	ref,
	buildCommand,
}) {
	const cwd = process.cwd();

	log(`Current working directory: ${cwd}`);

	if (ref) {
		// const temporaryDir = await createTempDirectory();
		log(`Checking out ref '${ref}'`);
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
				warning('Error reading package.json', error);
			}

			if (pkgJson && pkgJson.scripts && pkgJson.scripts.build) {
				log('Build script found in package.json');
				buildCommand = 'npm run build';
			}
		}

		if (buildCommand) {
			await npmCi({ cwd }).catch((error) => {
				throw new Error(`Failed to install dependencies:\n${error.message}`);
			});

			log(`Running build command: ${buildCommand}`);
			await exec(buildCommand, { cwd }).catch((error) => {
				throw new Error(`Failed to run build command: ${buildCommand}\n${error.message}`);
			});
		}
	}

	if (!pkgSizeInstalled) {
		log('Installing pkg-size globally');
		await exec('yarn global add pkg-size');
		addPath((await exec('yarn global bin')).stdout.trim());
		pkgSizeInstalled = true;
	}

	log('Getting package size');
	const result = await exec('pkg-size --json', { cwd }).catch((error) => {
		throw new Error(`Failed to determine package size: ${error.message}`);
	});
	debug(JSON.stringify(result, null, 4));

	const pkgData = JSON.parse(result.stdout);

	await Promise.all(pkgData.files.map(async (file) => {
		file.isTracked = await isFileTracked(`.${file.path}`);
	}));

	log('Cleaning up');
	await exec('git reset --hard'); // Reverts changed files
	const { stdout: cleanList } = await exec('git clean -dfx'); // Deletes untracked & ignored files
	debug(cleanList);

	return pkgData;
}

export default buildRef;
