import exec from './exec';

async function isFileTracked(filePath: string) {
	const { exitCode } = await exec(`git ls-files --error-unmatch ${filePath}`, {
		ignoreReturnCode: true,
	});
	return exitCode === 0;
}

export default isFileTracked;
