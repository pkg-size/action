import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import builtins from 'builtin-modules';
import path from 'path';

const rollupConfig = {
	input: 'src/index.js',
	plugins: [
		commonjs(),
		nodeResolve({
			preferBuiltins: false,
		}),
		terser(),
		filesize(),
	],
	external: builtins,
	output: {
		format: 'cjs',
		file: 'dist/index.js',
	},
};

export default rollupConfig;