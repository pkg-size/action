import fs from 'fs';
import path from 'path';
import { rmRF } from '@actions/io';
import * as log from './log.js';
import exec from './exec.js';

async function npmCi({ cwd } = {}) {
	if (fs.existsSync('node_modules')) {
		log.info('Cleaning node_modules');
		await rmRF(path.join(cwd, 'node_modules'));
	}

	const { exitCode, stdout, stderr } = await exec('npx ci', {
		cwd,
		ignoreReturnCode: true,
	});

	if (exitCode > 0) {
		throw new Error(`${stderr}\n${stdout}`);
	}
}

export default npmCi;
