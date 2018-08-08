const reqProm = require('request-promise');
const knex = require('./knex/knex');

function getUserFavorites(githubId, username, numFavorites) {
  console.log('getuserfavorites');
  const userFollowingApiUrl = {
    url: `https://api.github.com/users/${username}/following`,
    qs: {
      page: 1,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET
    },
    headers: {
      'User-Agent': 'steveninouye'
    },
    json: true
  };
  const pages = Math.ceil(numFavorites / 30);
  const favRequestPromises = [];
  for (i = 1; i <= pages; i++) {
    userFollowingApiUrl.qs.page = i;
    favRequestPromises.push(reqProm(userFollowingApiUrl));
  }
  Promise.all(favRequestPromises).then(allFavoritesArray => {
    const allFavorites = allFavoritesArray.reduce((a, c) => {
      let combinedArray = a.concat(c);
      return combinedArray;
    }, []);
    allFavorites.forEach(e => {
      knex('users')
        .select()
        .where('github_url', e.html_url)
        .then(result => {
          if (!result[0]) {
            /////////////////////// request favorite user API
            const githubUserApiUrl = {
              url: e.url,
              qs: {
                client_id: clientId,
                client_secret: clientSecret
              },
              headers: {
                'User-Agent': 'steveninouye'
              },
              json: true
            };
            request(githubUserApiUrl, (err, res, body) => {
              // add user to user_github table
              knex('users')
                .returning('user_id')
                .insert({
                  username: body.login,
                  github_api_url: body.url,
                  github_url: body.html_url,
                  num_of_repo: body.public_repos,
                  num_of_fav: body.following,
                  num_of_followers: body.followers,
                  avatar: body.avatar_url
                })
                // attach user to user's favorites
                .then(id => {
                  knex('user_fav_user')
                    .insert({
                      user_id: parseInt(githubId, 10),
                      fav_user_id: parseInt(id, 10)
                    })
                    .then(() => console.log('Favorite Added'));
                  console.log('New user Added');
                });
            });
          } else {
            knex('user_fav_user')
              .select()
              .where({
                user_id: parseInt(githubId, 10),
                fav_user_id: parseInt(result[0].user_id, 10)
              })
              .then(matchedFavUser => {
                if (!matchedFavUser[0]) {
                  knex('user_fav_user')
                    .insert({
                      user_id: parseInt(githubId, 10),
                      fav_user_id: parseInt(result[0].user_id, 10)
                    })
                    .then(() => {
                      console.log('Favorite added');
                    });
                } else {
                  console.log('user is already matched');
                }
              });
          }
        });
    });
  });
}

function getUser(username) {
  const userApiUrl = {
    url: `https://api.github.com/users/`,
    qs: {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET
    },
    headers: {
      'User-Agent': 'steveninouye'
    },
    json: true
  };
  userApiUrl.url += username;
  reqProm(userApiUrl).then(userJson => {
    const username = userJson.login;
    const {
      url,
      html_url,
      public_repos,
      followers,
      following,
      avatar_url
    } = userJson;
    knex('users')
      .select()
      .where('username', username)
      .then(data => {
        if (data.length === 0) {
          knex('users')
            .returning('user_id')
            .insert({
              username: username,
              github_api_url: url,
              github_url: html_url,
              num_of_repo: public_repos,
              num_of_fav: following,
              num_of_followers: followers,
              avatar: avatar_url
            })
            .then(user_id => {
              user_id = parseInt(user_id[0], 10);
              getUserFavorites(user_id, username, following);
            });
        } else {
          knex('users')
            .where('username', username)
            .returning('user_id')
            .update({
              github_api_url: url,
              github_url: html_url,
              num_of_repo: public_repos,
              num_of_fav: following,
              num_of_followers: followers,
              avatar: avatar_url
            })
            .then(user_id => {
              console.log(`${username} updated`);
              user_id = parseInt(user_id[0], 10);
              getUserFavorites(user_id, username, following);
            });
        }
      });
  });
}
