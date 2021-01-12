import { setOutput } from '@actions/core';
import { regressionReportTemplate, headOnlyReportTemplate } from '../report-templates/index.js';
import isBaseDiffFromHead from './is-base-diff-from-head.js';
import buildRef from './build-ref.js';
import * as log from './log.js';

async function generateSizeReport({
	pr,
	buildCommand,
	commentReport,
	mode,
	unchangedFiles,
	hideFiles,
	sortBy,
	sortOrder,
	displaySize,
}) {
	log.startGroup('Build HEAD');
	const headPkgData = await buildRef({
		refData: pr.head,
		buildCommand,
	});
	setOutput('headPkgData', headPkgData);
	log.endGroup();

	if (mode === 'head-only') {
		if (commentReport !== 'false') {
			return headOnlyReportTemplate({
				headPkgData,
				displaySize,
				// sortBy,
				// sortOrder,
				hideFiles,
			});
		}
	}

	const { ref: baseRef } = pr.base;
	let basePkgData;
	if (await isBaseDiffFromHead(baseRef)) {
		log.info('HEAD is different from BASE. Triggering build.');
		log.startGroup('Build BASE');
		basePkgData = await buildRef({
			checkoutRef: baseRef,
			refData: pr.base,
			buildCommand,
		});
		log.endGroup();
	} else {
		log.info('HEAD is identical to BASE. Skipping base build.');
		basePkgData = {
			...headPkgData,
			ref: pr.base,
		};
	}
	setOutput('basePkgData', basePkgData);

	if (commentReport !== 'false') {
		return regressionReportTemplate({
			headPkgData,
			basePkgData,
			displaySize,
			sortBy,
			sortOrder,
			hideFiles,
			unchangedFiles,
		});
	}

	return false;
}

export default generateSizeReport;
