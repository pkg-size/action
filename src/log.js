import * as core from '@actions/core';

const log = (...msgs) => core.info('[ 🤖 pkg-size-action ]', ...msgs.map(object => JSON.stringify(object, null, 4)));
export default log;
