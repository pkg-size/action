import exec from './exec.js';

/*
 * Compares files between current ref and the base ref (not commits)
 * The clean up (git reset --hard) that happens is crucial as it
 * takes into consideration uncommitted files
 */
async function isBaseDiffFromHead(baseReference) {
	try {
		await exec(`git fetch origin ${baseReference} --depth=1`);
	} catch (error) {
		throw new Error(`Failed to git fetch ${baseReference} ${error.message}`);
	}

	const { exitCode } = await exec(`git diff --quiet origin/${baseReference}`, { ignoreReturnCode: true });
	return exitCode !== 0;
}

export default isBaseDiffFromHead;
