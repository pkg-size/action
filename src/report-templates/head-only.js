function headOnly({
	headPkgData,
}) {
	return JSON.stringify(headPkgData, null, 4);
}

export default headOnly;
