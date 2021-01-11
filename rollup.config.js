import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import builtins from 'builtin-modules';

const rollupConfig = {
	input: 'src/index.js',
	plugins: [
		commonjs(),
		nodeResolve({
			preferBuiltins: false,
		}),
		terser({
			compress: false,
			format: {
				beautify: true,
			},
		}),
	],
	external: builtins,
	output: {
		format: 'cjs',
		file: 'dist/index.js',
	},
};

export default rollupConfig;
