const knex = require('./knex/knex.js');

function getLibraries(library) {
  knex('code_files')
    .select()
    .where(q =>
      q
        .where('file_code', 'like', `%'${library}'%`)
        .orWhere('file_code', 'like', `%"${library}"%`)
    )
    .andWhere(q => {
      q.whereNot('file_name', 'like', '%.md');
    })
    .then(data => {
      console.log(data);
    });
}

function getReposWithLibraries(library) {
  knex('code_files')
    .select()
    .where('file_name', 'package.json')
    .andWhere(q => q.where('file_code', 'like', `%"${library}":%`))
    .then(data => {
      console.log(data);
    });
}

function getFilesWithLibraries(library) {
  knex('code_files')
    .select()
    .where(q =>
      q
        .where('file_code', 'like', `%require('${library}')%`)
        .orWhere('file_code', 'like', `%require("${library}")%`)
        .orWhere('file_code', 'like', `%from '${library}'%`)
        .orWhere('file_code', 'like', `%from "${library}"%`)
    )
    .andWhere(q => {
      q.where('file_name', 'like', '%.ts').orWhere('file_name', 'like', '%.js');
    })
    .then(data => {
      console.log(data);
    });
}
getFilesWithLibraries('body-parser');
