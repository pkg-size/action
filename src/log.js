const log = (...msgs) => console.log('[ 🤖 pkg-size-action ]', ...msgs.map(object => JSON.stringify(object, null, 4)));
export default log;
