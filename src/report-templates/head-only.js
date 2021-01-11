import byteSize from 'byte-size';
import markdownTable from 'markdown-table';
import outdent from 'outdent';
import { c } from '../lib/markdown.js';

function headOnly({
	headPkgData,
}) {
	const table = markdownTable([
		['File', 'Size'],
		...headPkgData.files.map(file => [
			file.label,
			c(byteSize(file.size)),
		]),
	], {
		align: ['', 'r'],
	});

	return outdent`
	### 📊 Package size report

	${table}

	${JSON.stringify(headPkgData, null, 4)}
	`;
}

export default headOnly;
