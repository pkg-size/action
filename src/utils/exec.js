import {exec as _exec} from '@actions/exec';

async function exec(commandLine, options) {
	let stdout = '';
	let stderr = '';

	const startTime = Date.now();
	const exitCode = await _exec(commandLine, null, {
		...options,
		ignoreReturnCode: true,
		silent: true,
		listeners: {
			stdout(data) {
				stdout += data.toString();
			},
			stderr(data) {
				stderr += data.toString();
			},
		},
	});
	const duration = Date.now() - startTime;

	return {
		exitCode,
		duration,
		stdout,
		stderr,
	};
}

export default exec;
