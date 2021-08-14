import { partition } from 'lodash-es';
import globToRegExp from 'glob-to-regexp';

function partionHidden(
	hideFilesGlob: string | undefined,
	files: { path: string }[],
) {
	if (!hideFilesGlob) {
		return [[], files];
	}
	const hideFilesPtrn = globToRegExp(hideFilesGlob, { extended: true });
	return partition(files, file => hideFilesPtrn.test(file.path));
}

function getSizeLabels(
	displaySizes: {
		property: string;
		label: string;
	}[],
) {
	if (displaySizes.length === 1 && displaySizes[0].property === 'size') {
		return '';
	}
	return ` (${displaySizes.map(s => s.label).join(' / ')})`;
}

const supportedSizes = {
	uncompressed: {
		label: 'Size',
		property: 'size',
	},
	gzip: {
		label: 'Gzip',
		property: 'sizeGzip',
	},
	brotli: {
		label: 'Brotli',
		property: 'sizeBrotli',
	},
} as const;

function parseDisplaySize(displaySize: string) {
	return displaySize
		.split(',')
		.map(s => s.trim())
		.filter(s => supportedSizes.hasOwnProperty(s)) // eslint-disable-line no-prototype-builtins
		.map(s => supportedSizes[s]);
}

const listSizes = (
	displaySizes: { property: any }[],
	callback: (any) => any,
) => displaySizes
	.map(({ property }) => callback(property))
	.join(' / ');

function sortFiles(
	files: {
		path: string;
		[key: string]: any;
	}[],
	sortBy: string,
	sortOrder: string,
) {
	files.sort((a, b) => (b[sortBy] - a[sortBy]) || (a.path.localeCompare(b.path)));
	if (sortOrder === 'asc') {
		files.reverse();
	}
}

export {
	partionHidden,
	getSizeLabels,
	parseDisplaySize,
	listSizes,
	sortFiles,
};
