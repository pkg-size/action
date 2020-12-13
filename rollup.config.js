import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import builtins from 'builtin-modules';

const rollupConfig = {
	input: 'src/index.js',
	plugins: [
		commonjs(),
		json(),
		nodeResolve({
			preferBuiltins: false,
		}),
	],
	external: [
		...builtins,
		'@actions/cache',
	],
	output: {
		format: 'cjs',
		file: 'dist/index.js',
	},
};

export default rollupConfig;
