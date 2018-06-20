const knex = require('./knex/knex.js');

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

function getLibraries(library) {
  knex('file_code')
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
    .where(q => q.whereNot('dir_and_files.dir_file_name', 'like', '%.md'))
    .andWhere(q => {
      q.where('file_code', 'like', `%'${library}'%`).orWhere(
        'file_code',
        'like',
        `%"${library}"%`
      );
    })
    .then(data => {
      console.log(data);
    });
}

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
getLibraries('hbs');
