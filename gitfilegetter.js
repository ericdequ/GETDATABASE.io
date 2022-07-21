const { Octokit } = require("@octokit/rest");
// Octokit.js
// https://github.com/octokit/core.js#readme
const fs = require('fs');
//const config = require("./config.json");


/*
const octokit = new Octokit({
  auth: 'personal-access-token123'
});
*/
//var dict1 = {};

//dict1 = Octokit.request('Ge')

/* Get JSON from github and show first 2 elements*/
var dict = {};
dict = Octokit.request('GET /repos/{owner}/{repo}/contents/{path}',{
  owner: 'Ericdequ',
  repo: 'GetExtension',
  path: 'Scrapping/BeautifulSoup/CMS/CMSdata.json'
});



const jsonString = JSON.stringify(dict);
console.log(jsonString);



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
