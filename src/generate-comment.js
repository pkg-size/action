import byteSize from 'byte-size';
import {partition, round} from 'lodash-es';
import markdownTable from 'markdown-table';
import outdent from 'outdent';
import {c, link, sub, sup} from './markdown-utils';

const percent = fraction => {
	if (fraction < 0.001) { // 0.09% and lower
		fraction = round(fraction, 4);
	} else if (fraction < 0.01) { // 0.9% and lower
		fraction = round(fraction, 3);
	} else { // 1% and higher
		fraction = round(fraction, 2);
	}

	return fraction.toLocaleString(undefined, {
		style: 'percent',
		maximumSignificantDigits: 3,
	});
};

const changeSymbol = (from, to) => {
	if (
		from === undefined ||
		to === undefined ||
		from === to
	) {
		return '';
	}

	if (from > to) {
		return '↓';
	}

	if (from < to) {
		return '↑';
	}
};

const delta = (from, to) => {
	const fraction = (to - from) / from;
	if (fraction === 0) {
		return '';
	}

	return percent(fraction) + changeSymbol(from, to);
};

const baseFileData = {
	get delta() {
		return (this.headSize || 0) - (this.baseSize || 0);
	},
};

function processFiles(fileMap, type, sizeData) {
	let totalSize = 0;

	sizeData.files.forEach(file => {
		if (!fileMap[file.path]) {
			fileMap[file.path] = Object.assign(
				Object.create(baseFileData),
				{
					path: file.path,
					link: link(c(file.path), sizeData.ref.repo.html_url + '/blob/' + sizeData.ref.ref + file.path),
				},
			);
		}

		fileMap[file.path][type] = file.size;
		totalSize += file.size;
	});

	return totalSize;
}

function generateComment({
	commentSignature,
	unchangedFiles,
	sortBy,
	sortOrder,
	baseSizeData,
	headSizeData,
}) {
	const fileMap = {};
	const baseTotalSize = processFiles(fileMap, 'baseSize', baseSizeData);
	const headTotalSize = processFiles(fileMap, 'headSize', headSizeData);

	const files = Object.values(fileMap);
	files.sort((a, b) => (b[sortBy] - a[sortBy]) || (a.path.localeCompare(b.path)));
	if (sortOrder === 'asc') {
		files.reverse();
	}

	const [unchanged, changed] = partition(files, fileData => (fileData.baseSize === fileData.headSize));
	const totalDelta = delta(baseTotalSize, headTotalSize);

	const table = markdownTable([
		['File', 'Before', 'After'],
		...[
			...changed,
			...(unchangedFiles === 'show' ? unchanged : []),
		].map(data => [
			data.link,
			data.baseSize ? c(byteSize(data.baseSize)) : '—',
			data.headSize ? (
				(data.baseSize ? sup(delta(data.baseSize, data.headSize)) : '') + c(byteSize(data.headSize))
			) : '—',
		]),
		[
			'**Total** ' + (unchangedFiles === 'show' ? '' : sub('_(Includes unchanged files)_')),
			c(byteSize(baseTotalSize)),
			sup(totalDelta) + c(byteSize(headTotalSize)),
		],
	], {
		align: ['', 'r', 'r'],
	});

	let unchangedTable = '';
	if (unchangedFiles === 'collapse') {
		unchangedTable = markdownTable([
			['File', 'Size'],
			...unchanged.map(data => [
				data.link,
				c(byteSize(data.baseSize)),
			]),
		], {
			align: ['', 'r'],
		});

		unchangedTable = `<details><summary>Unchanged files</summary>\n\n${unchangedTable}\n</details>`;
	}

	return outdent`
	### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${totalDelta || 'No changes'}</kbd>

	**Tarball size** ${c(byteSize(baseSizeData.tarballSize))} → ${sup(delta(baseSizeData.tarballSize, headSizeData.tarballSize)) + c(byteSize(headSizeData.tarballSize))}

	${table}

	${unchangedTable}

	${commentSignature}
	`;
}

export default generateComment;
