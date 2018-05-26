exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      return knex('users')
        .insert([{ username: 'test', password: 'password' }])
        .then(() => {
          return knex('code_files')
            .del()
            .then(() => {
              return knex('code_files')
                .insert([{ file_name: 'test', file_author: 'author' }])
                .then(() => {
                  return knex('documents')
                    .del()
                    .then(() => {
                      return knex('documents').insert([
                        { doc_title: 'test', doc_author: 'test' }
                      ]);
                    });
                });
            });
        });
    });
};
