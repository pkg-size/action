import {setFailed} from '@actions/core';
import {exec} from '@actions/exec';

(async () => {
	await exec('npm i @npmcli/run-script');
})().catch(error => {
	setFailed(error.message);
});
