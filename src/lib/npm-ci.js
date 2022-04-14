import fs from 'fs';
import path from 'path';
import { rmRF } from '@actions/io';
import * as log from './log.js';
import exec from './exec.js';

async function npmCi({
	cwd,
	installCommand = autoDetectInstallCommand(),
} = {}) {
	if (fs.existsSync('node_modules')) {
		log.info('Cleaning node_modules');
		await rmRF(path.join(cwd, 'node_modules'));
	}

	const options = {
		cwd,
		ignoreReturnCode: true,
	};

	const { exitCode, stdout, stderr } = await exec(installCommand, options);
	if (exitCode > 0) {
		throw new Error(`${stderr}\n${stdout}`);
	}
}

function autoDetectInstallCommand() {
	if (fs.existsSync('package-lock.json')) {
		log.info('Installing dependencies with npm');
		return 'npm ci';
	}

	if (fs.existsSync('yarn.lock')) {
		log.info('Installing dependencies with yarn');
		// yarn is installed on GitHub Actions by default
		return 'yarn install --frozen-lockfile';
	}

	if (fs.existsSync('pnpm-lock.yaml')) {
		log.info('Installing dependencies with pnpm');
		// pnpm is not installed on GitHub Actions by default
		return 'npx pnpm i --frozen-lockfile';
	}

	log.info('No lock file detected. Installing dependencies with npm');
	return 'npm i';
}

export default npmCi;
