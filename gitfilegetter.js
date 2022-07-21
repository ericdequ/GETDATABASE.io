import {octokit, App } from "octokit";

//core.js # readme

/*
const octokit = new Octokit({
    auth: ''

})
*/

await octokit.request('GET /repos/{owner}/{repo}/contents/{path}',{
    owner: 'EricDequ',
    repo: 'GetExtension',
    path: 'GetExtension/Scrapping/BeautifulSoup/CMS/CMSdata.json'
});


