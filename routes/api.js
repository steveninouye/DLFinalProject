const router = require('express').Router();
const knex = require('../knex/knex.js');

router.post('/db/search', (req, res) => {
  console.log('user: ', req.user);
  console.log('searchInput: ', req.body.searchInput);
  const { searchInput } = req.body;
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
      'file_code.file_code',
      'file_code.file_id'
    )
    .where('file_code', 'like', `%${searchInput}%`)
    .then(data => {
      res.json(data);
    });
});

router.post('/lib/file', (req, res) => {
  console.log('user: ', req.user);
  console.log('searchInput: ', req.body.searchInput);
  const { searchInput } = req.body;
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
      'file_code.file_code',
      'file_code.file_id'
    )
    .where(q =>
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
});

router.post('/lib/repo', (req, res) => {
  console.log('user: ', req.user);
  console.log('searchInput: ', req.body.searchInput);
  const { searchInput } = req.body;
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
      'file_code.file_code',
      'file_code.file_id'
    )
    .where('dir_and_files.dir_file_name', 'package.json')
    .andWhere(q => q.where('file_code', 'like', `%"${searchInput}":%`))
    .then(data => {
      res.json(data);
    });
});

router.post('/lib', (req, res) => {
  console.log('user: ', req.user);
  console.log('searchInput: ', req.body.searchInput);
  const { searchInput } = req.body;
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
      'file_code.file_code',
      'file_code.file_id'
    )
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
});

module.exports = router;
