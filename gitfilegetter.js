import { Octokit, App } from "@octokit/rest";
// Octokit.js
// https://github.com/octokit/core.js#readme
const fs = require('fs');


const octokit = new Octokit({
  auth: 'personal-access-token123'
});

var dict = {};

dict = octokit.request('GET /repos/{owner}/{repo}/contents/{path}',{
  owner: 'Ericdequ',
  repo: 'GetExtension',
  path: 'Scrapping/BeautifulSoup/CMS/CMSdata.json'
});


console.log(dict[0],dict[1]);
