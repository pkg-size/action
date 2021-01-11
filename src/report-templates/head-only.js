import byteSize from 'byte-size';
import markdownTable from 'markdown-table';
import outdent from 'outdent';
import { c, strong } from '../lib/markdown.js';

function headOnly({
	headPkgData,
}) {
	const totalSize = 0;
	const table = markdownTable([
		['File', 'Size'],
		...headPkgData.files.map(file => [
			file.label,
			c(byteSize(file.size)),
		]),
		[
			strong('Total'),
			c(byteSize(totalSize)),
		],
		[
			strong('Tarball size'),
			c(byteSize(headPkgData.tarballSize)),
		],

	], {
		align: ['', 'r'],
	});

	return outdent`
	### 📊 Package size report

	${table}

	Hidden files

	${JSON.stringify(headPkgData, null, 4)}
	`;
}

export default headOnly;
