import * as github from '@actions/github';
import log from './log';

async function upsertComment({
	token,
	commentSignature,
	repo,
	prNumber,
	body,
}) {
	const octokit = github.getOctokit(token);
	const {data: comments} = await octokit.issues.listComments({
		...repo,
		issue_number: prNumber, // eslint-disable-line camelcase
	});

	const hasPreviousComment = comments.find(comment => comment.body.endsWith(commentSignature));
	if (hasPreviousComment) {
		log(`Updating previous comment ${hasPreviousComment.id}`);
		await octokit.issues.updateComment({
			...repo,
			comment_id: hasPreviousComment.id, // eslint-disable-line camelcase
			body,
		});
	} else {
		log('Posting new comment');
		await octokit.issues.createComment({
			...repo,
			issue_number: prNumber, // eslint-disable-line camelcase
			body,
		});
	}
}

export default upsertComment;
