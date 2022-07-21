const { Octokit } = require("@octokit/rest");

async function run() {
  const octokit = new Octokit();

  const { data } = await octokit.repos.getContent({
    owner: "Ericdequ",
    repo: "GetExtension",
    path: "Scrapping/BeautifulSoup/CMS/CMSdata.json",
  });

  // ignore non-directory responses
  if (!Array.isArray(data)) {
    return;
  }

  for (const item of data) {
    console.log(item);
  }

  console.log(data);
}

run();