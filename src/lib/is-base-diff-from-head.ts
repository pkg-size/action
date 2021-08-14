import exec from './exec';

/*
 * Compares files between current ref and the base ref (not commits)
 * The clean up (git reset --hard) that happens is crucial as it
 * takes into consideration uncommitted files
 */
async function isBaseDiffFromHead(baseRef: string) {
	try {
		await exec(`git fetch origin ${baseRef} --depth=1`);
	} catch (error) {
		throw new Error(`Failed to git fetch ${baseRef} ${error.message}`);
	}

	const { exitCode } = await exec(`git diff --quiet origin/${baseRef}`, { ignoreReturnCode: true });
	return exitCode !== 0;
}

export default isBaseDiffFromHead;
