import byteSize from 'byte-size';
import globToRegExp from 'glob-to-regexp';
import {partition, round} from 'lodash-es';
import markdownTable from 'markdown-table';
import outdent from 'outdent';
import {c, sub, sup, link} from './utils/markdown';

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


function calculateDiffBy(head, base, property) {
	const delta = head[property] - base[property];
	return {
		delta,
		percent: delta / head[property],
	};
}

function calculateDiff(head, base) {
	return {
		size: calculateDiffBy(head, base, 'size'),
		sizeGzip: calculateDiffBy(head, base, 'sizeGzip'),
		sizeBrotli: calculateDiffBy(head, base, 'sizeBrotli'),
	};
}

function processPkgFiles(fileMap, type, pkgData) {
	const data = {
		size: 0,
		sizeGzip: 0,
		sizeBrotli: 0,
		tarballSize: pkgData.tarballSize,
		files: pkgData.files,
	};

	pkgData.files.forEach(file => {
		if (!fileMap[file.path]) {
			fileMap[file.path] = {
				path: file.path,
				link: (
					file.isTracked ?
						link(c(file.path), pkgData.ref.repo.html_url + '/blob/' + pkgData.ref.ref + file.path) :
						c(file.path)
				),
			};
		}

		const entry = fileMap[file.path];
		entry[type] = file;
		data.size += file.size;
		data.gzip += file.gzip;
		data.brotli += file.brotli;

		if (entry.head && entry.base) {
			entry.diff = calculateDiff(entry.head, entry.base);
		}
	});

	return data;
}

function comparePackages(headPkg, basePkg) {
	const fileMap = {};
	const head = processPkgFiles(fileMap, 'head', headPkg);
	const base = processPkgFiles(fileMap, 'base', basePkg);

	return {
		head,
		base,
		diff: calculateDiff(head, base),
		files: Object.values(fileMap),
	};
}


function generateComment({
	commentSignature,
	unchangedFiles,
	hideFiles,
	sortBy,
	sortOrder,
	basePkgData,
	headPkgData,
}) {

	console.log(JSON.stringify(comparePackages(headPkgData, basePkgData), null, 4));

	return '';
	// const fileMap = {};
	// const headTotalSize = processPkgFiles(fileMap, 'headSize', headPkgData);
	// const baseTotalSize = processPkgFiles(fileMap, 'baseSize', basePkgData);
	// const totalDelta = delta(baseTotalSize, headTotalSize);

	// let files = Object.values(fileMap);
	// files.sort((a, b) => (b[sortBy] - a[sortBy]) || (a.path.localeCompare(b.path)));
	// if (sortOrder === 'asc') {
	// 	files.reverse();
	// }

	// let hidden = [];
	// if (hideFiles) {
	// 	const hideFilesPtrn = globToRegExp(hideFiles, {extended: true});
	// 	[hidden, files] = partition(files, fileData => hideFilesPtrn.test(fileData.path));
	// }

	// const [unchanged, changed] = partition(files, fileData => (fileData.baseSize === fileData.headSize));

	// const table = markdownTable([
	// 	['File', 'Before', 'After'],
	// 	...[
	// 		...changed,
	// 		...(unchangedFiles === 'show' ? unchanged : []),
	// 	].map(data => [
	// 		data.link,
	// 		data.baseSize ? c(byteSize(data.baseSize)) : '—',
	// 		data.headSize ? (
	// 			(data.baseSize ? sup(delta(data.baseSize, data.headSize)) : '') + c(byteSize(data.headSize))
	// 		) : '—',
	// 	]),
	// 	[
	// 		'**Total** ' + (unchangedFiles === 'show' ? '' : sub('_(Includes all files)_')),
	// 		c(byteSize(baseTotalSize)),
	// 		sup(totalDelta) + c(byteSize(headTotalSize)),
	// 	],
	// ], {
	// 	align: ['', 'r', 'r'],
	// });

	// let unchangedTable = '';
	// if (unchangedFiles === 'collapse' && unchanged.length > 0) {
	// 	unchangedTable = markdownTable([
	// 		['File', 'Size'],
	// 		...unchanged.map(data => [
	// 			data.link,
	// 			c(byteSize(data.baseSize)),
	// 		]),
	// 	], {
	// 		align: ['', 'r'],
	// 	});

	// 	unchangedTable = `<details><summary>Unchanged files</summary>\n\n${unchangedTable}\n</details>`;
	// }

	// let hiddenTable = '';
	// if (hidden.length > 0) {
	// 	hiddenTable = markdownTable([
	// 		['File', 'Before', 'After'],
	// 		...hidden.map(data => [
	// 			data.link,
	// 			data.baseSize ? c(byteSize(data.baseSize)) : '—',
	// 			data.headSize ? (
	// 				(data.baseSize ? sup(delta(data.baseSize, data.headSize)) : '') + c(byteSize(data.headSize))
	// 			) : '—',
	// 		]),
	// 	], {
	// 		align: ['', 'r', 'r'],
	// 	});

	// 	hiddenTable = `<details><summary>Hidden files</summary>\n\n${hiddenTable}\n</details>`;
	// }

	// return outdent`
	// ### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${totalDelta || 'No changes'}</kbd>

	// **Tarball size** ${c(byteSize(basePkgData.tarballSize))} → ${sup(delta(basePkgData.tarballSize, headPkgData.tarballSize)) + c(byteSize(headPkgData.tarballSize))}

	// ${table}

	// ${unchangedTable}

	// ${hiddenTable}

	// ${commentSignature}
	// `;
}

export default generateComment;
