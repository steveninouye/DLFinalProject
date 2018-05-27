exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      return knex('users')
        .insert([
          { username: 'test', password: 'password' },
          { username: 'test2', password: 'password' }
        ])
        .then(() => {
          return knex('code_files')
            .del()
            .then(() => {
              return knex('code_files')
                .insert([
                  { file_name: 'code1', file_author: 'author1' },
                  { file_name: 'code2', file_author: 'author2' }
                ])
                .then(() => {
                  return knex('documents')
                    .del()
                    .then(() => {
                      return knex('documents')
                        .insert([
                          { doc_title: 'doc1', doc_author: 'author1' },
                          { doc_title: 'doc2', doc_author: 'author2' }
                        ])
                        .then(() => {
                          return knex('user_code')
                            .del()
                            .then(() => {
                              return knex('user_code')
                                .insert([{ user_id: 1, file_id: 1 }])
                                .then(() => {
                                  return knex('user_doc')
                                    .del()
                                    .then(() => {
                                      return knex('user_doc')
                                        .insert([{ user_id: 1, doc_id: 1 }])
                                        .then(() => {
                                          return knex('user_fav_code')
                                            .del()
                                            .then(() => {
                                              return knex('user_fav_code')
                                                .insert([
                                                  {
                                                    user_id: 1,
                                                    file_id: 1
                                                  }
                                                ])
                                                .then(() => {
                                                  return knex('user_fav_doc')
                                                    .del()
                                                    .then(() => {
                                                      return knex(
                                                        'user_fav_doc'
                                                      )
                                                        .insert([
                                                          {
                                                            user_id: 1,
                                                            doc_id: 1
                                                          }
                                                        ])
                                                        .then(() => {
                                                          return knex(
                                                            'user_fav_user'
                                                          )
                                                            .del()
                                                            .then(() => {
                                                              return knex(
                                                                'user_fav_user'
                                                              )
                                                                .insert([
                                                                  {
                                                                    user_id: 1,
                                                                    fav_user: 2
                                                                  }
                                                                ])
                                                                .then(() => {
                                                                  return knex(
                                                                    'user_code_rating'
                                                                  )
                                                                    .del()
                                                                    .then(
                                                                      () => {
                                                                        return knex(
                                                                          'user_code_rating'
                                                                        )
                                                                          .insert(
                                                                            [
                                                                              {
                                                                                rated_by: 1,
                                                                                file_id: 1,
                                                                                file_rating: 5
                                                                              }
                                                                            ]
                                                                          )
                                                                          .then(
                                                                            () => {
                                                                              return knex(
                                                                                'user_doc_rating'
                                                                              )
                                                                                .del()
                                                                                .then(
                                                                                  () => {
                                                                                    return knex(
                                                                                      'user_doc_rating'
                                                                                    ).insert(
                                                                                      [
                                                                                        {
                                                                                          rated_by: 1,
                                                                                          doc_id: 1,
                                                                                          doc_rating: 5
                                                                                        }
                                                                                      ]
                                                                                    );
                                                                                  }
                                                                                );
                                                                            }
                                                                          );
                                                                      }
                                                                    );
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};
