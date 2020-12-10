import globToRegExp from 'glob-to-regexp';
import {partition} from 'lodash-es';
import {c, link} from './markdown';

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

function calculateDiffBy(head, base, property) {
	const delta = head[property] - base[property];
	return {
		delta,
		percent: percent(delta / head[property]),
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
		data.sizeGzip += file.sizeGzip;
		data.sizeBrotli += file.sizeBrotli;

		if (entry.head && entry.base) {
			entry.diff = calculateDiff(entry.head, entry.base);
		}
	});

	return data;
}

function comparePackages(headPkg, basePkg, {
	hideFiles,
} = {}) {
	const fileMap = {};
	const head = processPkgFiles(fileMap, 'head', headPkg);
	const base = processPkgFiles(fileMap, 'base', basePkg);

	let allFiles = Object.values(fileMap);

	let hidden = [];
	if (hideFiles) {
		const hideFilesPtrn = globToRegExp(hideFiles, {extended: true});
		[hidden, allFiles] = partition(allFiles, file => hideFilesPtrn.test(file.path));
	}

	const [unchanged, changed] = partition(allFiles, file => (file.diff.size.delta === 0));

	return {
		head,
		base,
		diff: calculateDiff(head, base),
		files: {
			changed,
			unchanged,
			hidden,
		},
	};
}

export default comparePackages;
