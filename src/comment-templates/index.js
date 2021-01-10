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

const formatSize = ({ delta, percent }) => (delta ? (percent + directionSymbol(delta)) : '');

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

function generateComment({
	unchangedFiles,
	pkgComparisonData,
	displaySize,
}) {
	const { changed, unchanged, hidden } = pkgComparisonData.files;
	const totalDelta = formatSize(pkgComparisonData.diff.size);
	// eslint-disable-next-line no-prototype-builtins
	const displaySizes = displaySize.split(',').map(s => s.trim()).filter(s => supportedSizes.hasOwnProperty(s));

	let sizeLabel = '';
	if (displaySizes.length > 1 || displaySizes[0] !== 'uncompressed') {
		sizeLabel = ` (${displaySizes.map(s => supportedSizes[s].label).join(' / ')})`;
	}

	console.log(JSON.stringify(changed, null, 4));

	const table = markdownTable([
		['File', `Before${sizeLabel}`, `After${sizeLabel}`],
		...[
			...changed,
			...(unchangedFiles === 'show' ? unchanged : []),
		].map(file => [
			file.link,
			file.base && file.base.size
				? (
					displaySizes
						.map(s => supportedSizes[s].property)
						.map(property => c(byteSize(file.base[property])))
						.join(' / ')
				)
				: '—',
			file.head && file.head.size
				? (
					displaySizes
						.map(s => supportedSizes[s].property)
						.map(property => (file.base && file.base[property] ? sup(formatSize(file.diff[property])) : '') + c(byteSize(file.head[property])))
						.join(' / ')
				)
				: '—',
		]),
		[
			`${strong('Total')} ${(unchangedFiles === 'show' ? '' : sub('_(Includes all files)_'))}`,
			c(byteSize(pkgComparisonData.base.size)),
			sup(totalDelta) + c(byteSize(pkgComparisonData.head.size)),
		],
		[
			strong('Tarball size'),
			c(byteSize(pkgComparisonData.base.tarballSize)),
			(
				sup(formatSize(pkgComparisonData.diff.tarballSize))
				+ c(byteSize(pkgComparisonData.head.tarballSize))
			),
		],
	], {
		align: ['', 'r', 'r'],
	});

	let unchangedTable = '';
	if (unchangedFiles === 'collapse' && unchanged.length > 0) {
		unchangedTable = markdownTable([
			['File', 'Size'],
			...unchanged.map(file => [
				file.link,
				c(byteSize(file.base.size)),
			]),
		], {
			align: ['', 'r'],
		});

		unchangedTable = `<details><summary>Unchanged files</summary>\n\n${unchangedTable}\n</details>`;
	}

	let hiddenTable = '';
	if (hidden.length > 0) {
		hiddenTable = markdownTable([
			['File', 'Before', 'After'],
			...hidden.map(file => [
				file.link,
				file.base && file.base.size ? c(byteSize(file.base.size)) : '—',
				file.head && file.head.size
					? (
						(file.base && file.base.size ? sup(formatSize(file.diff.size)) : '') + c(byteSize(file.head.size))
					)
					: '—',
			]),
		], {
			align: ['', 'r', 'r'],
		});

		hiddenTable = `<details><summary>Hidden files</summary>\n\n${hiddenTable}\n</details>`;
	}

	return outdent`
	### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${totalDelta || 'No changes'}</kbd>

	${table}

	${unchangedTable}

	${hiddenTable}
	`;
}

export default generateComment;
