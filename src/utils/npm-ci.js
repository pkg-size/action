import fs from 'fs';
import path from 'path';
import {rmRF} from '@actions/io';
import * as core from '@actions/core';
import exec from './exec';

async function npmCi({cwd} = {}) {
	if (fs.existsSync('node_modules')) {
		core.info('Cleaning node_modules');
		await rmRF(path.join(cwd, 'node_modules'));
	}

	if (fs.existsSync('package-lock.json')) {
		core.info('Installing dependencies with npm');
		return await exec('npm ci', {cwd});
	}

	if (fs.existsSync('yarn.lock')) {
		core.info('Installing dependencies with yarn');

		// yarn is installed on GitHub Actions by default
		return await exec('yarn install --frozen-lockfile', {cwd});
	}

	if (fs.existsSync('pnpm-lock.yaml')) {
		core.info('Installing dependencies with pnpm');

		// pnpm is not installed on GitHub Actions by default
		return await exec('npx pnpm i --frozen-lockfile', {cwd});
	}

	core.info('No lock file detected. Installing dependencies with npm');
	return await exec('npm i', {cwd});
}

export default npmCi;
