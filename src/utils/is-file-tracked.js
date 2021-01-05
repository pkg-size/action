import exec from './exec.js';

async function isFileTracked(filePath) {
	const { exitCode } = await exec(`git ls-files --error-unmatch ${filePath}`, { ignoreReturnCode: true });
	return exitCode === 0;
}

export default isFileTracked;
