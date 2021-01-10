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

function generateComment({
	unchangedFiles,
	pkgComparisonData,
}) {
	const { changed, unchanged, hidden } = pkgComparisonData.files;
	const totalDelta = formatSize(pkgComparisonData.diff.size);

	const table = markdownTable([
		['File', 'Before', 'After'],
		...[
			...changed,
			...(unchangedFiles === 'show' ? unchanged : []),
		].map(file => [
			file.link,
			file.base && file.base.size ? c(byteSize(file.base.size)) : '—',
			file.head && file.head.size
				? (
					(file.base && file.base.size ? sup(formatSize(file.diff.size)) : '') + c(byteSize(file.head.size))
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
