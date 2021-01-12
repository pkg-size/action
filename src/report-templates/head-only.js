import byteSize from 'byte-size';
import markdownTable from 'markdown-table';
import outdent from 'outdent';
import { c, strong } from '../lib/markdown.js';
import { partionHidden } from './utils.js';

const listSizes = (displaySizes, callback) => displaySizes
	.map(({ property }) => callback(property))
	.join(' / ');

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
};

function headOnly({
	headPkgData,
	hideFiles,
	displaySize,
}) {
	const displaySizes = displaySize
		.split(',')
		.map(s => s.trim())
		.filter(s => supportedSizes.hasOwnProperty(s)) // eslint-disable-line no-prototype-builtins
		.map(s => supportedSizes[s]);

	let sizeHeadingLabel = '';
	if (displaySizes.length > 1 || displaySizes[0].property !== 'size') {
		sizeHeadingLabel = ` (${displaySizes.map(s => s.label).join(' / ')})`;
	}

	const [hidden, files] = partionHidden(hideFiles, headPkgData.files);

	const table = markdownTable([
		['File', `Size${sizeHeadingLabel}`],
		...files.map(file => [
			file.label,
			listSizes(displaySizes, p => c(byteSize(file[p]))),
		]),
		[
			strong('Total'),
			listSizes(displaySizes, p => c(byteSize(headPkgData[p]))),
		],
		[
			strong('Tarball size'),
			c(byteSize(headPkgData.tarballSize)),
		],

	], {
		align: ['', 'r'],
	});

	let hiddenTable = '';
	if (hidden.length > 0) {
		hiddenTable = markdownTable([
			['File', `Size${sizeHeadingLabel}`],
			...hidden.map(file => [
				file.label,
				listSizes(displaySizes, p => c(byteSize(file[p]))),
			]),
		], {
			align: ['', 'r'],
		});

		hiddenTable = `<details><summary>Hidden files</summary>\n\n${hiddenTable}\n</details>`;
	}

	return outdent`
	### 📊 Package size report

	${table}

	${hiddenTable}
	`;
}

export default headOnly;
