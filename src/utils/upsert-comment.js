import * as core from '@actions/core';
import * as github from '@actions/github';

async function upsertComment({
	token,
	commentSignature,
	repo,
	prNumber,
	body,
}) {
	core.startGroup('Comment on PR');

	const octokit = github.getOctokit(token);

	core.info('Getting list of comments');
	const {data: comments} = await octokit.issues.listComments({
		...repo,
		issue_number: prNumber, // eslint-disable-line camelcase
	});

	const hasPreviousComment = comments.find(comment => comment.body.endsWith(commentSignature));
	if (hasPreviousComment) {
		core.info(`Updating previous comment ID ${hasPreviousComment.id}`);
		await octokit.issues.updateComment({
			...repo,
			comment_id: hasPreviousComment.id, // eslint-disable-line camelcase
			body,
		});
	} else {
		core.info('Posting new comment');
		await octokit.issues.createComment({
			...repo,
			issue_number: prNumber, // eslint-disable-line camelcase
			body,
		});
	}

	core.endGroup();
}

export default upsertComment;
