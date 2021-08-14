import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import builtins from 'builtin-modules';
import esbuild from 'rollup-plugin-esbuild';

export default defineConfig({
	input: 'src/index.ts',
	plugins: [
		commonjs(),
		nodeResolve({
			preferBuiltins: false,
		}),
		esbuild({
			minifyIdentifiers: true,
			minifySyntax: true,
			legalComments: 'none',
		}),
	],
	external: [
		...builtins,
	],
	output: {
		format: 'cjs',
		file: 'dist/index.js',
	},
});
