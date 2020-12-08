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

	const user = await octokit.users.getAuthenticated();
	console.log(user);

	const hasPreviousComment = comments.find(comment => (
		// TODO: Replace with id from current token user ID
		comment.user.id === 41898282 && // github-actions[bot] user id
		comment.body.endsWith(commentSignature)
	));

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
