import { setOutput } from '@actions/core';
import { comparisonReportTemplate, headOnlyReportTemplate } from '../report-templates/index.js';
import comparePackages from './compare-packages.js';
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
		buildCommand,
	});
	headPkgData.ref = pr.head;
	setOutput('headPkgData', headPkgData);
	log.endGroup();

	if (mode === 'head-only') {
		if (commentReport !== 'false') {
			return headOnlyReportTemplate({
				headPkgData,
			});
		}
	}

	const { ref: baseRef } = pr.base;
	let basePkgData;
	if (await isBaseDiffFromHead(baseRef)) {
		log.info('HEAD is different from BASE. Triggering build.');
		log.startGroup('Build BASE');
		basePkgData = await buildRef({
			ref: baseRef,
			buildCommand,
		});
		basePkgData.ref = pr.base;
		log.endGroup();
	} else {
		log.info('HEAD is identical to BASE. Skipping base build.');
		basePkgData = {
			...headPkgData,
			ref: pr.base,
		};
	}
	setOutput('basePkgData', basePkgData);

	const pkgComparisonData = comparePackages(headPkgData, basePkgData, {
		sortBy,
		sortOrder,
		hideFiles,
	});
	setOutput('pkgComparisonData', pkgComparisonData);

	if (commentReport !== 'false') {
		return comparisonReportTemplate({
			pkgComparisonData,
			unchangedFiles,
			displaySize,
		});
	}

	return false;
}

export default generateSizeReport;
