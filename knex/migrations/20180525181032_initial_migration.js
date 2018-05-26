exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.bigIncrements('user_id');
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email');
      table.string('github_token');
      table.bigInteger('created_at').defaultTo(Date.now());
      table.bigInteger('updated_at').defaultTo(Date.now());
    })
    .createTable('code_files', table => {
      table.bigIncrements('file_id');
      table.string('file_name').notNullable();
      table.string('file_author').notNullable();
      table.text('file_contents');
      table.text('file_path');
      table.string('file_url');
    })
    .createTable('documents', table => {
      table.bigIncrements('doc_id');
      table.string('doc_title').notNullable();
      table.string('doc_author').notNullable();
      table.text('doc_contents');
      table.string('doc_url');
    });
  // .createTable('user_code', table => {
  //   table.bigInteger('user_id');
  // });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('documents')
    .dropTable('code_files')
    .dropTable('users');
};
