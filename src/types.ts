import type { PullRequest } from '@octokit/webhooks-types';

export type Ref = PullRequest['head'];
