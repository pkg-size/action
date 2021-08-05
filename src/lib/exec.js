import { exec as _exec } from '@actions/exec';

async function exec(commandLine, options) {
	let stdout = '';
	let stderr = '';

	const startTime = Date.now();
	let exitCode;
	try {
		console.log(commandLine);
		exitCode = await _exec(commandLine, null, {
			...options,
			silent: true,
			listeners: {
				stdout(data) {
					stdout += data.toString();
					console.log('stdout', data.toString());
				},
				stderr(data) {
					stderr += data.toString();
					console.log('stderr', data.toString());
				},
			},
		});	
	} catch (error) {
		console.log('caught error', error);
		throw error;
	}
	const duration = Date.now() - startTime;

	return {
		exitCode,
		duration,
		stdout,
		stderr,
	};
}

export default exec;
