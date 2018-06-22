const knex = require('./knex/knex.js');

function linkCodeToUser(user) {
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
      // 'file_code.file_code',
      'file_code.file_id'
    )
    .where(q => q.where('users.username', user));
  // .andWhere('dir_and_files.dir_file_name', 'package.json');
}

function linkUserFavUserFiles(user) {
  return knex('users')
    .select({
      fav_username: 'ru.username',
      fav_user_id: 'ru.user_id',
      fav_num_followers: 'ru.num_of_followers',
      fav_github_url: 'ru.github_url',
      fav_repo_Url: 'r.repo_url',
      fav_file_name: 'df.dir_file_name',
      fav_file_url: 'df.dir_file_url',
      fav_file_code: 'fc.file_code',
      fav_file_id: 'fc.file_id'
    })
    .join({ f: 'user_fav_user' }, 'f.user_id', '=', 'users.user_id')
    .join({ r: 'repositories' }, 'r.user_id', '=', 'f.fav_user_id')
    .join({ ru: 'users' }, 'ru.user_id', '=', 'r.user_id')
    .join({ df: 'dir_and_files' }, 'df.repo_id', '=', 'r.repo_id')
    .join({ fc: 'file_code' }, 'fc.dir_file_id', '=', 'df.dir_file_id')
    .where(q => q.where('users.username', user));
}

const user = 'steveninouye';
let searchInput = ['%express%', '%body-parser%'];
// for (i = 0; i < 5; i++) {
//   searchInput[i] = searchInput[i] ? searchInput[i] : '';
// }
// console.log(searchInput);

function addWhere(func, arr, mult) {
  if (mult >= 0) {
    return addWhere(
      func.andWhere('file_code', 'like', `%${arr[mult]}%`),
      arr,
      mult - 1
    );
  } else {
    return func;
  }
}

addWhere(linkCodeToUser(user), searchInput, searchInput.length - 1).then(
  data => {
    console.log(data);
  }
);

// function linkCodeToUser(user) {
//   return knex('file_code')
//     .join(
//       'dir_and_files',
//       'file_code.dir_file_id',
//       '=',
//       'dir_and_files.dir_file_id'
//     )
//     .join('repositories', 'dir_and_files.repo_id', '=', 'repositories.repo_id')
//     .join('users', 'users.user_id', '=', 'repositories.user_id')
//     .select(
//       'users.username',
//       'users.user_id',
//       'users.num_of_followers',
//       'users.github_url',
//       'repositories.repo_url',
//       'dir_and_files.dir_file_name',
//       'dir_and_files.dir_file_url',
//       'file_code.file_code',
//       'file_code.file_id'
//     )
//     .where(q => q.from('users').where(user));
// }

// linkCodeToUser({}).then(data => {
//   data.forEach(e => {
//     console.log(e.username);
//   });
// });

// knex('users')
//   .select({
//     fav_username: 'ru.username',
//     fav_repo_Url: 'r.repo_url',
//     fav_file_name: 'df.dir_file_name'
//   })
//   .join({ f: 'user_fav_user' }, 'f.user_id', '=', 'users.user_id')
//   .join({ fu: 'users' }, 'fu.user_id', '=', 'f.fav_user_id')
//   .join({ r: 'repositories' }, 'r.user_id', '=', 'f.fav_user_id')
//   .join({ ru: 'users' }, 'ru.user_id', '=', 'r.user_id')
//   .join({ df: 'dir_and_files' }, 'df.repo_id', '=', 'r.repo_id')
//   .join({ fc: 'file_code' }, 'fc.dir_file_id', '=', 'df.dir_file_id')
//   .whereNot('users.username', 'steveninouye')
//   .andWhere('fc.file_code', 'like', '%express%')
//   .then(data => {
//     console.log(data);
//   });

// knex('file_code')
//   .join(
//     'dir_and_files',
//     'file_code.dir_file_id',
//     '=',
//     'dir_and_files.dir_file_id'
//   )
//   .join('repositories', 'dir_and_files.repo_id', '=', 'repositories.repo_id')
//   .join('users', 'users.user_id', '=', 'repositories.user_id')
//   .select('users.*')
//   .where('file_code', 'like', "%'body-parser'%")
//   .then(data => console.log(data));

// function getLibraries(library) {
//   const user = {};
//   knex('file_code')
//     .join(
//       'dir_and_files',
//       'file_code.dir_file_id',
//       '=',
//       'dir_and_files.dir_file_id'
//     )
//     .join('repositories', 'dir_and_files.repo_id', '=', 'repositories.repo_id')
//     .join('users', 'users.user_id', '=', 'repositories.user_id')
//     .select(
//       'users.username',
//       'users.user_id',
//       'users.num_of_followers',
//       'users.github_url',
//       'repositories.repo_url',
//       'dir_and_files.dir_file_name',
//       'dir_and_files.dir_file_url',
//       // 'file_code.file_code',
//       'file_code.file_id'
//     )
//     .where(q => {
//       q.from('users').where(user);
//     })
//     .andWhere(q => q.whereNot('dir_and_files.dir_file_name', 'like', '%.md'))
//     .andWhere(q => {
//       q.where('file_code', 'like', `%'${library}'%`).orWhere(
//         'file_code',
//         'like',
//         `%"${library}"%`
//       );
//     })
//     .then(data => {
//       console.log(data);
//     });
// }

// function getReposWithLibraries(library) {
//   knex('file_code')
//     .join(
//       'dir_and_files',
//       'file_code.dir_file_id',
//       '=',
//       'dir_and_files.dir_file_id'
//     )
//     .join('repositories', 'dir_and_files.repo_id', '=', 'repositories.repo_id')
//     .join('users', 'users.user_id', '=', 'repositories.user_id')
//     .select(
//       'users.username',
//       'users.user_id',
//       'users.num_of_followers',
//       'users.github_url',
//       'repositories.repo_url',
//       'dir_and_files.dir_file_name',
//       'dir_and_files.dir_file_url',
//       'file_code.file_code',
//       'file_code.file_id'
//     )
//     .where('dir_and_files.dir_file_name', 'package.json')
//     .andWhere(q => q.where('file_code', 'like', `%"${library}":%`))
//     .then(data => {
//       console.log(data);
//     });
// }

// function getFilesWithLibraries(library) {
//   knex('file_code')
//     .join(
//       'dir_and_files',
//       'file_code.dir_file_id',
//       '=',
//       'dir_and_files.dir_file_id'
//     )
//     .join('repositories', 'dir_and_files.repo_id', '=', 'repositories.repo_id')
//     .join('users', 'users.user_id', '=', 'repositories.user_id')
//     .select(
//       'users.username',
//       'users.user_id',
//       'users.num_of_followers',
//       'users.github_url',
//       'repositories.repo_url',
//       'dir_and_files.dir_file_name',
//       'dir_and_files.dir_file_url',
//       'file_code.file_code',
//       'file_code.file_id'
//     )
//     .where(q =>
//       q
//         .where('dir_and_files.dir_file_name', 'like', '%.ts')
//         .orWhere('dir_and_files.dir_file_name', 'like', '%.js')
//     )
//     .andWhere(q => {
//       q.where('file_code', 'like', `%require('${library}')%`)
//         .orWhere('file_code', 'like', `%require("${library}")%`)
//         .orWhere('file_code', 'like', `%from '${library}'%`)
//         .orWhere('file_code', 'like', `%from "${library}"%`);
//     })
//     .then(data => {
//       console.log(data);
//     });
// }
// getLibraries('hbs');
