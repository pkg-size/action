import { partition } from 'lodash-es';
import globToRegExp from 'glob-to-regexp';

function partionHidden(hideFilesGlob, files) {
	if (!hideFilesGlob) {
		return [[], files];
	}
	const hideFilesPtrn = globToRegExp(hideFilesGlob, { extended: true });
	return partition(files, file => hideFilesPtrn.test(file.path));
}

export {
	partionHidden, // eslint-disable-line import/prefer-default-export
};
