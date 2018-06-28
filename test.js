const reqProm = require('request-promise');
const knex = require('./knex/knex');

let gitHubReqObj = {
  uri: `https://api.github.com/search/code?`,
  qs: {
    page: 1,
    client_id: 'b4835d3d7e23771765a8',
    client_secret: '6e39a862e59d57249cff7a9928a694d3945a9c97'
  },
  headers: {
    'User-Agent': 'steveninouye'
  },
  json: true
};

const searchInput = 'express';
let clientResponse = [];
knex('users')
  .select('username')
  .orderBy('num_of_followers', 'desc')
  .limit(50)
  .then(users => {
    const userQueryString = users.reduce(
      (acc, user) => `${acc}+user:${user.username}`,
      ''
    );
    gitHubReqObj.uri += `q=${searchInput}+language:JavaScript${userQueryString}`;
    return reqProm(gitHubReqObj);
  })
  .then(codeApiResponse => {
    const promiseArray = [];
    const searchResults = codeApiResponse.items;
    searchResults.forEach(file => {
      const repository = file.repository.name;
      const username = file.repository.owner.login;
      const user_github_url = file.repository.owner.html_url;
      const file_html_url = file.html_url;
      // end of the url
      const blobIndex = file_html_url.indexOf('/blob/');
      const endUrl = file_html_url.slice(blobIndex + 6);
      const slashIndex = endUrl.indexOf('/');
      const file_name = endUrl.slice(slashIndex + 1);
      const resultObj = {
        username,
        repository,
        user_github_url,
        file_html_url,
        file_name
      };
      // push result into response array
      clientResponse.push(resultObj);
      // create object to request code
      const rawReqObj = Object.assign({}, gitHubReqObj);
      rawReqObj.uri = `https://raw.githubusercontent.com/${username}/${repository}/${endUrl}`;
      delete rawReqObj.json;
      console.log(gitHubReqObj);
      //   promiseArray.push(reqProm(rawReqObj));
    });
    // return Promise.all(promiseArray);
  });
//   .then(codeArray => console.log(codeArray));
