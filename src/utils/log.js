import * as core from '@actions/core';
import ansiStyles from 'ansi-styles';

const log = (...msgs) => core.info(`${ansiStyles.cyan.open}[🤖 pkg-size-action]${ansiStyles.cyan.close} ${msgs.map(object => (typeof object === 'object') ? JSON.stringify(object, null, 4) : object).join('\t')}`);

export default log;

export function details(summary, details) {
	core.startGroup(summary);
	core.info(details);
	core.endGroup();
}
