import fs from 'fs';
import path from 'path';
import { rmRF } from '@actions/io';
import * as log from './log';
import exec from './exec';

async function npmCi(
	cwd = process.cwd(),
) {
	if (fs.existsSync('node_modules')) {
		log.info('Cleaning node_modules');
		await rmRF(path.join(cwd, 'node_modules'));
	}

	const options = {
		cwd,
		ignoreReturnCode: true,
	};

	let installCommand = '';

	if (fs.existsSync('package-lock.json')) {
		log.info('Installing dependencies with npm');
		installCommand = 'npm ci';
	} else if (fs.existsSync('yarn.lock')) {
		log.info('Installing dependencies with yarn');

		// yarn is installed on GitHub Actions by default
		installCommand = 'yarn install --frozen-lockfile';
	} else if (fs.existsSync('pnpm-lock.yaml')) {
		log.info('Installing dependencies with pnpm');

		// pnpm is not installed on GitHub Actions by default
		installCommand = 'npx pnpm i --frozen-lockfile';
	} else {
		log.info('No lock file detected. Installing dependencies with npm');
		installCommand = 'npm i';
	}

	const { exitCode, stdout, stderr } = await exec(installCommand, options);
	if (exitCode > 0) {
		throw new Error(`${stderr}\n${stdout}`);
	}
}

export default npmCi;
