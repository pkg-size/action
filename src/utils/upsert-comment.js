import {endGroup, info, startGroup} from '@actions/core';
import {getOctokit} from '@actions/github';

async function upsertComment({
	token,
	commentSignature,
	repo,
	prNumber,
	body,
}) {
	startGroup('Comment on PR');

	const octokit = getOctokit(token);

	info('Getting list of comments');
	const {data: comments} = await octokit.issues.listComments({
		...repo,
		issue_number: prNumber, // eslint-disable-line camelcase
	});

	const hasPreviousComment = comments.find(comment => comment.body.endsWith(commentSignature));
	if (hasPreviousComment) {
		info(`Updating previous comment ID ${hasPreviousComment.id}`);
		await octokit.issues.updateComment({
			...repo,
			comment_id: hasPreviousComment.id, // eslint-disable-line camelcase
			body,
		});
	} else {
		info('Posting new comment');
		await octokit.issues.createComment({
			...repo,
			issue_number: prNumber, // eslint-disable-line camelcase
			body,
		});
	}

	endGroup();
}

export default upsertComment;
