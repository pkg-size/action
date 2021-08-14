import { exec as _exec, ExecOptions } from '@actions/exec';

async function exec(
	command: string,
	options?: ExecOptions,
) {
	let stdout = '';
	let stderr = '';

	const startTime = Date.now();
	const exitCode = await _exec(command, undefined, {
		...options,
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
