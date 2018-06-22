const router = require('express').Router();
const knex = require('../knex/knex.js');

const numOfResults = 200;

function linkCode() {
  return knex('file_code')
    .join(
      'dir_and_files',
      'file_code.dir_file_id',
      '=',
      'dir_and_files.dir_file_id'
    )
    .join('repositories', 'dir_and_files.repo_id', '=', 'repositories.repo_id')
    .join('users', 'users.user_id', '=', 'repositories.user_id')
    .select(
      'users.username',
      'users.user_id',
      'users.num_of_followers',
      'users.github_url',
      'repositories.repo_url',
      'dir_and_files.dir_file_name',
      'dir_and_files.dir_file_url',
      'file_code.file_code',
      'file_code.file_id'
    );
}

function linkCodeToUser(user) {
  return linkCode().where(q => q.where('users.username', user));
}

function linkCodeToMiscUsers(userArray) {
  return linkCode().where(q => q.whereNotIn('users.username', userArray));
}

function linkUserFavUserFiles(user) {
  return knex('users')
    .select({
      username: 'ru.username',
      user_id: 'ru.user_id',
      num_followers: 'ru.num_of_followers',
      github_url: 'ru.github_url',
      repo_Url: 'r.repo_url',
      dir_file_name: 'df.dir_file_name',
      dir_file_url: 'df.dir_file_url',
      file_code: 'fc.file_code',
      file_id: 'fc.file_id'
    })
    .join({ f: 'user_fav_user' }, 'f.user_id', '=', 'users.user_id')
    .join({ r: 'repositories' }, 'r.user_id', '=', 'f.fav_user_id')
    .join({ ru: 'users' }, 'ru.user_id', '=', 'r.user_id')
    .join({ df: 'dir_and_files' }, 'df.repo_id', '=', 'r.repo_id')
    .join({ fc: 'file_code' }, 'fc.dir_file_id', '=', 'df.dir_file_id')
    .where(q => q.where('users.username', user));
}

function getAllUsernames(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.username) {
      if (acc.indexOf(curr.username) === -1) {
        acc.push(curr.username);
      }
    } else if (curr.fav_username) {
      if (acc.indexOf(curr.fav_username) === -1) {
        acc.push(curr.fav_username);
      }
    }
    return acc;
  }, []);
}

function addType(arr, type) {
  return arr.map(e => {
    e.type = type;
    return e;
  });
}

router.post('/db/search', (req, res) => {
  const { searchInput } = req.body;
  const user = req.user ? req.user.username : undefined;
  console.log('searchInput: ', searchInput);
  console.log('this is the user: ', user);
  if (user) {
    linkCodeToUser(user)
      .andWhere('file_code', 'like', `%${searchInput}%`)
      .limit(numOfResults)
      .then(data => {
        data = addType(data, 'self');
        if (data.length === numOfResults) {
          res.json(data);
        } else {
          linkUserFavUserFiles(user)
            .andWhere('fc.file_code', 'like', `%${searchInput}%`)
            .orderBy('ru.num_of_followers', 'desc')
            .limit(numOfResults - data.length)
            .then(favUserData => {
              favUserData = addType(favUserData, 'favorite');
              const userAndFavUserData = data.concat(favUserData);
              if (userAndFavUserData.length === numOfResults) {
                res.json(userAndFavUserData);
              } else {
                const usernameArray = getAllUsernames(userAndFavUserData);
                linkCodeToMiscUsers(usernameArray)
                  .andWhere('file_code', 'like', `%${searchInput}%`)
                  .orderBy('users.num_of_followers', 'desc')
                  .limit(numOfResults - userAndFavUserData.length)
                  .then(miscUserData => {
                    miscUserData = addType(miscUserData, 'misc');
                    const allUserData = userAndFavUserData.concat(miscUserData);
                    res.json(allUserData);
                  });
              }
            });
        }
      });
  } else {
    linkCodeToMiscUsers([])
      .andWhere('file_code', 'like', `%${searchInput}%`)
      .orderBy('users.num_of_followers', 'desc')
      .limit(numOfResults)
      .then(miscUserData => {
        miscUserData = addType(miscUserData, 'misc');
        res.json(miscUserData);
      });
  }
});

router.post('/lib/file', (req, res) => {
  const { searchInput } = req.body;
  const user = req.user ? req.user.username : undefined;
  console.log('searchInput: ', searchInput);
  console.log('this is the user: ', user);
  if (user) {
    linkCodeToUser(user)
      .andWhere(q =>
        q
          .where('dir_and_files.dir_file_name', 'like', '%.ts')
          .orWhere('dir_and_files.dir_file_name', 'like', '%.js')
      )
      .andWhere(q => {
        q.where('file_code', 'like', `%require('${searchInput}')%`)
          .orWhere('file_code', 'like', `%require("${searchInput}")%`)
          .orWhere('file_code', 'like', `%from '${searchInput}'%`)
          .orWhere('file_code', 'like', `%from "${searchInput}"%`);
      })
      .limit(numOfResults)
      .then(data => {
        data = addType(data, 'self');
        if (data.length === numOfResults) {
          res.json(data);
        } else {
          linkUserFavUserFiles(user)
            .andWhere(q =>
              q
                .where('df.dir_file_name', 'like', '%.ts')
                .orWhere('df.dir_file_name', 'like', '%.js')
            )
            .andWhere(q => {
              q.where('fc.file_code', 'like', `%require('${searchInput}')%`)
                .orWhere('fc.file_code', 'like', `%require("${searchInput}")%`)
                .orWhere('fc.file_code', 'like', `%from '${searchInput}'%`)
                .orWhere('fc.file_code', 'like', `%from "${searchInput}"%`);
            })
            .orderBy('ru.num_of_followers', 'desc')
            .limit(numOfResults - data.length)
            .then(favUserData => {
              favUserData = addType(favUserData, 'favorite');
              const userAndFavUserData = data.concat(favUserData);
              if (userAndFavUserData.length === numOfResults) {
                res.json(userAndFavUserData);
              } else {
                const usernameArray = getAllUsernames(userAndFavUserData);
                linkCodeToMiscUsers(usernameArray)
                  .andWhere(q =>
                    q
                      .where('dir_and_files.dir_file_name', 'like', '%.ts')
                      .orWhere('dir_and_files.dir_file_name', 'like', '%.js')
                  )
                  .andWhere(q => {
                    q.where('file_code', 'like', `%require('${searchInput}')%`)
                      .orWhere(
                        'file_code',
                        'like',
                        `%require("${searchInput}")%`
                      )
                      .orWhere('file_code', 'like', `%from '${searchInput}'%`)
                      .orWhere('file_code', 'like', `%from "${searchInput}"%`);
                  })
                  .orderBy('users.num_of_followers', 'desc')
                  .limit(numOfResults - userAndFavUserData.length)
                  .then(miscUserData => {
                    miscUserData = addType(miscUserData, 'misc');
                    const allUserData = userAndFavUserData.concat(miscUserData);
                    res.json(allUserData);
                  });
              }
            });
        }
      });
  } else {
    linkCodeToMiscUsers([])
      .andWhere(q =>
        q
          .where('dir_and_files.dir_file_name', 'like', '%.ts')
          .orWhere('dir_and_files.dir_file_name', 'like', '%.js')
      )
      .andWhere(q => {
        q.where('file_code', 'like', `%require('${searchInput}')%`)
          .orWhere('file_code', 'like', `%require("${searchInput}")%`)
          .orWhere('file_code', 'like', `%from '${searchInput}'%`)
          .orWhere('file_code', 'like', `%from "${searchInput}"%`);
      })
      .then(data => {
        res.json(data);
      });
  }

  // linkCodeToUser(user)
  //   .andWhere(q =>
  //     q
  //       .where('dir_and_files.dir_file_name', 'like', '%.ts')
  //       .orWhere('dir_and_files.dir_file_name', 'like', '%.js')
  //   )
  //   .andWhere(q => {
  //     q.where('file_code', 'like', `%require('${searchInput}')%`)
  //       .orWhere('file_code', 'like', `%require("${searchInput}")%`)
  //       .orWhere('file_code', 'like', `%from '${searchInput}'%`)
  //       .orWhere('file_code', 'like', `%from "${searchInput}"%`);
  //   })
  //   .limit(200)
  //   .then(data => {
  //     if (data.length === 200) {
  //       res.json(data);
  //     } else {
  //       linkCodeToUser()
  //         .where(q => q.from('users').whereNot(user))
  //         .andWhere(q =>
  //           q
  //             .where('dir_and_files.dir_file_name', 'like', '%.ts')
  //             .orWhere('dir_and_files.dir_file_name', 'like', '%.js')
  //         )
  //         .andWhere(q => {
  //           q.where('file_code', 'like', `%require('${searchInput}')%`)
  //             .orWhere('file_code', 'like', `%require("${searchInput}")%`)
  //             .orWhere('file_code', 'like', `%from '${searchInput}'%`)
  //             .orWhere('file_code', 'like', `%from "${searchInput}"%`);
  //         })
  //         .limit(200)
  //         .then(otherUserData => {
  //           const allData = data.concat(otherUserData);
  //           res.json(allData);
  //         });
  //     }
  //   });
});

router.post('/lib/repo', (req, res) => {
  const { searchInput } = req.body;
  const user = req.user ? req.user.username : undefined;
  console.log('searchInput: ', searchInput);
  console.log('this is the user: ', user);
  if (user) {
    linkCodeToUser(user)
      .andWhere('dir_and_files.dir_file_name', 'package.json')
      .andWhere(q => q.where('file_code', 'like', `%"${searchInput}":%`))
      .limit(numOfResults)
      .then(data => {
        data = addType(data, 'self');
        if (data.length === numOfResults) {
          res.json(data);
        } else {
          linkUserFavUserFiles(user)
            .andWhere('df.dir_file_name', 'package.json')
            .andWhere(q =>
              q.where('fc.file_code', 'like', `%"${searchInput}":%`)
            )
            .orderBy('ru.num_of_followers', 'desc')
            .limit(numOfResults - data.length)
            .then(favUserData => {
              favUserData = addType(favUserData, 'favorite');
              const userAndFavUserData = data.concat(favUserData);
              if (userAndFavUserData.length === numOfResults) {
                res.json(userAndFavUserData);
              } else {
                const usernameArray = getAllUsernames(userAndFavUserData);
                linkCodeToMiscUsers(usernameArray)
                  .andWhere('dir_and_files.dir_file_name', 'package.json')
                  .andWhere(q =>
                    q.where('file_code', 'like', `%"${searchInput}":%`)
                  )
                  .orderBy('users.num_of_followers', 'desc')
                  .limit(numOfResults - userAndFavUserData.length)
                  .then(miscUserData => {
                    miscUserData = addType(miscUserData, 'misc');
                    const allUserData = userAndFavUserData.concat(miscUserData);
                    res.json(allUserData);
                  });
              }
            });
        }
      });
  } else {
    linkCodeToMiscUsers([])
      .andWhere('dir_and_files.dir_file_name', 'package.json')
      .andWhere(q => q.where('file_code', 'like', `%"${searchInput}":%`))
      .then(data => {
        res.json(data);
      });
  }
});

router.post('/lib', (req, res) => {
  const { searchInput } = req.body;
  const user = req.user ? req.user.username : undefined;
  console.log('searchInput: ', searchInput);
  console.log('this is the user: ', user);
  if (user) {
    linkCodeToUser(user)
      .andWhere(q => q.whereNot('dir_and_files.dir_file_name', 'like', '%.md'))
      .andWhere(q => {
        q.where('file_code', 'like', `%'${searchInput}'%`).orWhere(
          'file_code',
          'like',
          `%"${searchInput}"%`
        );
      })
      .limit(numOfResults)
      .then(data => {
        data = addType(data, 'self');
        if (data.length === numOfResults) {
          res.json(data);
        } else {
          linkUserFavUserFiles(user)
            .andWhere(q =>
              q.whereNot('dir_and_files.dir_file_name', 'like', '%.md')
            )
            .andWhere(q => {
              q.where('file_code', 'like', `%'${searchInput}'%`).orWhere(
                'file_code',
                'like',
                `%"${searchInput}"%`
              );
            })
            .orderBy('ru.num_of_followers', 'desc')
            .limit(numOfResults - data.length)
            .then(favUserData => {
              favUserData = addType(favUserData, 'favorite');
              const userAndFavUserData = data.concat(favUserData);
              if (userAndFavUserData.length === numOfResults) {
                res.json(userAndFavUserData);
              } else {
                const usernameArray = getAllUsernames(userAndFavUserData);
                linkCodeToMiscUsers(usernameArray)
                  .andWhere(q => q.whereNot('df.dir_file_name', 'like', '%.md'))
                  .andWhere(q => {
                    q.where(
                      'fc.file_code',
                      'like',
                      `%'${searchInput}'%`
                    ).orWhere('fc.file_code', 'like', `%"${searchInput}"%`);
                  })
                  .orderBy('users.num_of_followers', 'desc')
                  .limit(numOfResults - userAndFavUserData.length)
                  .then(miscUserData => {
                    miscUserData = addType(miscUserData, 'misc');
                    const allUserData = userAndFavUserData.concat(miscUserData);
                    res.json(allUserData);
                  });
              }
            });
        }
      });
  } else {
    linkCodeToMiscUsers([])
      .where(q => q.whereNot('dir_and_files.dir_file_name', 'like', '%.md'))
      .andWhere(q => {
        q.where('file_code', 'like', `%'${searchInput}'%`).orWhere(
          'file_code',
          'like',
          `%"${searchInput}"%`
        );
      })
      .then(data => {
        res.json(data);
      });
  }
});

module.exports = router;
