// import byteSize from 'byte-size';
// import markdownTable from 'markdown-table';
// import outdent from 'outdent';

function headOnly({
	headPkgData,
}) {
	return JSON.stringify(headPkgData, null, 4);
}

export default headOnly;
