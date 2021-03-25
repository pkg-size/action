import exec from './exec.js';

async function isFileTracked(filePath) {
	console.log('checking is tracked', filePath);

	const { exitCode } = await exec(`git ls-files --error-unmatch ${filePath}`, { ignoreReturnCode: true });
	return exitCode === 0;
}

export default isFileTracked;
