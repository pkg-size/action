import byteSize from 'byte-size';
import markdownTable from 'markdown-table';
import outdent from 'outdent';
import {
	c, sub, sup, strong,
} from '../lib/markdown.js';

const directionSymbol = (value) => {
	if (value < 0) {
		return '↓';
	}

	if (value > 0) {
		return '↑';
	}

	return '';
};

const formatDelta = ({ delta, percent }) => (delta ? (percent + directionSymbol(delta)) : '');

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

const listSizes = (displaySizes, callback) => displaySizes
	.map(({ property }) => callback(property))
	.join(' / ');

function generateComment({
	unchangedFiles,
	pkgComparisonData,
	displaySize,
}) {
	const { changed, unchanged, hidden } = pkgComparisonData.files;
	const displaySizes = displaySize
		.split(',')
		.map(s => s.trim())
		.filter(s => supportedSizes.hasOwnProperty(s)) // eslint-disable-line no-prototype-builtins
		.map(s => supportedSizes[s]);

	let sizeHeadingLabel = '';
	if (displaySizes.length > 1 || displaySizes[0].property !== 'size') {
		sizeHeadingLabel = ` (${displaySizes.map(s => s.label).join(' / ')})`;
	}

	const table = markdownTable([
		['File', `Before${sizeHeadingLabel}`, `After${sizeHeadingLabel}`],
		...[
			...changed,
			...(unchangedFiles === 'show' ? unchanged : []),
		].map(file => [
			file.label,
			file.base && file.base.size
				? listSizes(displaySizes, p => c(byteSize(file.base[p])))
				: '—',
			file.head && file.head.size
				? listSizes(
					displaySizes,
					p => (file.base && file.base[p] ? sup(formatDelta(file.diff[p])) : '') + c(byteSize(file.head[p])),
				)
				: '—',
		]),
		[
			`${strong('Total')} ${(unchangedFiles === 'show' ? '' : sub('_(Includes all files)_'))}`,
			listSizes(displaySizes, p => c(byteSize(pkgComparisonData.base[p]))),
			listSizes(displaySizes, p => (
				sup(formatDelta(pkgComparisonData.diff[p]))
				+ c(byteSize(pkgComparisonData.head[p]))
			)),
		],
		[
			strong('Tarball size'),
			c(byteSize(pkgComparisonData.base.tarballSize)),
			(
				sup(formatDelta(pkgComparisonData.diff.tarballSize))
				+ c(byteSize(pkgComparisonData.head.tarballSize))
			),
		],
	], {
		align: ['', 'r', 'r'],
	});

	let unchangedTable = '';
	if (unchangedFiles === 'collapse' && unchanged.length > 0) {
		unchangedTable = markdownTable([
			['File', `Size${sizeHeadingLabel}`],
			...unchanged.map(file => [
				file.label,
				listSizes(displaySizes, p => c(byteSize(file.base[p]))),
			]),
		], {
			align: ['', 'r'],
		});

		unchangedTable = `<details><summary>Unchanged files</summary>\n\n${unchangedTable}\n</details>`;
	}

	let hiddenTable = '';
	if (hidden.length > 0) {
		hiddenTable = markdownTable([
			['File', `Before${sizeHeadingLabel}`, `After${sizeHeadingLabel}`],
			...hidden.map(file => [
				file.label,
				file.base && file.base.size
					? listSizes(displaySizes, p => c(byteSize(file.base[p])))
					: '—',
				file.head && file.head.size
					? listSizes(
						displaySizes,
						p => (file.base && file.base[p] ? sup(formatDelta(file.diff[p])) : '') + c(byteSize(file.head[p])),
					)
					: '—',
			]),
		], {
			align: ['', 'r', 'r'],
		});

		hiddenTable = `<details><summary>Hidden files</summary>\n\n${hiddenTable}\n</details>`;
	}

	return outdent`
	### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${formatDelta(pkgComparisonData.diff.size) || 'No changes'}</kbd>

	${table}

	${unchangedTable}

	${hiddenTable}
	`;
}

export default generateComment;
