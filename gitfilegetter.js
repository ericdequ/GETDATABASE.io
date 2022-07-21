import { Octokit, App } from "octokit";
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'personal-access-token123'
});

await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'OWNER',
  repo: 'REPO',
  path: 'PATH'
})