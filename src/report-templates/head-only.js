import byteSize from 'byte-size';
import markdownTable from 'markdown-table';
import outdent from 'outdent';
import { partition } from 'lodash-es';
import globToRegExp from 'glob-to-regexp';
import { c, strong } from '../lib/markdown.js';

function headOnly({
	headPkgData,
	hideFiles,
}) {
	let { files } = headPkgData;
	let hidden = [];
	if (hideFiles) {
		const hideFilesPtrn = globToRegExp(hideFiles, { extended: true });
		[hidden, files] = partition(files, file => hideFilesPtrn.test(file.path));
	}

	const table = markdownTable([
		['File', 'Size'],
		...files.map(file => [
			file.label,
			c(byteSize(file.size)),
		]),
		[
			strong('Total'),
			c(byteSize(headPkgData.size)),
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
			['File', 'Size'],
			...hidden.map(file => [
				file.label,
				c(byteSize(file.size)),
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

	${JSON.stringify(headPkgData, null, 4)}
	`;
}

export default headOnly;
