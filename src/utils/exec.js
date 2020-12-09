import { exec as _exec } from '@actions/exec';

async function exec(commandLine, options) {
	let stdout = '';
	let stderr = '';

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

	return {
		exitCode,
		stdout,
		stderr,
	};
}

export default exec;
