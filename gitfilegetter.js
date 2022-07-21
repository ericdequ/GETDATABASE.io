const { Octokit } = require("@octokit/rest");
// Octokit.js
// https://github.com/octokit/core.js#readme
const fs = require('fs');

const octokit = new Octokit({
  auth: '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'
});

(async () => {

const { data: pullRequest } = octokit.rest.pulls.get({
    owner: "Ericdequ",
    repo: "GetExtension",
    path: "Scrapping/BeautifulSoup/CMS/CMSdata.json",
    pull_number: 1,
  });
  
  
  const { data: diff } = octokit.rest.pulls.get({
    owner: "Ericdequ",
    repo: "GetExtension",
    pull_number: 123,
    mediaType: {
      format: "json",
    },
  });

  console.log(octokit.request("GET /Ericdequ/GetExtension/Scrapping/BeautifulSoup/CMSdata.json"));

});








/* Read Json File Locally parse data 
fs.readFile("./customer.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const customer = JSON.parse(jsonString);
      console.log("Customer address is:", customer.address); // => "Customer address is: Infinity Loop Drive"
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });


*/
