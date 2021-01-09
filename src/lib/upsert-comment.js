import { getOctokit } from '@actions/github';
import * as log from './log.js';

async function upsertComment({
	token,
	commentSignature,
	repo,
	prNumber,
	body,
}) {
	log.startGroup('Comment on PR');

	body += `\n\n${commentSignature}`;

	const octokit = getOctokit(token);

	log.info('Getting list of comments');
	const { data: comments } = await octokit.issues.listComments({
		...repo,
		issue_number: prNumber,
	});

	const hasPreviousComment = comments.find(comment => comment.body.endsWith(commentSignature));
	if (hasPreviousComment) {
		log.info(`Updating previous comment ID ${hasPreviousComment.id}`);
		await octokit.issues.updateComment({
			...repo,
			comment_id: hasPreviousComment.id,
			body,
		});
	} else {
		log.info('Posting new comment');
		await octokit.issues.createComment({
			...repo,
			issue_number: prNumber,
			body,
		});
	}

	log.endGroup();
}

export default upsertComment;
