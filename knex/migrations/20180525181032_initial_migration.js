exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.bigIncrements('user_id');
      table
        .string('username')
        .unique()
        .notNullable();
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
      table
        .integer('kissit_file_author')
        .references('user_id')
        .inTable('users');
      table.text('file_contents');
      table.text('file_path');
      table.string('file_url');
      table.bigInteger('created_at').defaultTo(Date.now());
      table.bigInteger('updated_at').defaultTo(Date.now());
    })
    .createTable('documents', table => {
      table.bigIncrements('doc_id');
      table.string('doc_title').notNullable();
      table.string('doc_author').notNullable();
      table
        .integer('kissit_doc_author')
        .references('user_id')
        .inTable('users');
      table.text('doc_contents');
      table.string('doc_url');
      table.bigInteger('created_at').defaultTo(Date.now());
      table.bigInteger('updated_at').defaultTo(Date.now());
    })
    .createTable('user_code', table => {
      table.bigIncrements('user_code_id');
      table
        .bigInteger('user_id')
        .references('user_id')
        .inTable('users')
        .notNullable();
      table
        .bigInteger('file_id')
        .references('file_id')
        .inTable('code_files')
        .notNullable();
    })
    .createTable('user_doc', table => {
      table.bigIncrements('user_doc_id');
      table
        .bigInteger('user_id')
        .references('user_id')
        .inTable('users')
        .notNullable();
      table
        .bigInteger('doc_id')
        .references('doc_id')
        .inTable('documents')
        .notNullable();
    })
    .createTable('user_fav_code', table => {
      table.bigIncrements('user_fav_code_id');
      table
        .bigInteger('user_id')
        .references('user_id')
        .inTable('users')
        .notNullable();
      table
        .bigInteger('file_id')
        .references('file_id')
        .inTable('code_files')
        .notNullable();
      table.bigInteger('date_favorited').defaultTo(Date.now());
    })
    .createTable('user_fav_doc', table => {
      table.bigIncrements('user_fav_doc_id');
      table
        .bigInteger('user_id')
        .references('user_id')
        .inTable('users')
        .notNullable();
      table
        .bigInteger('doc_id')
        .references('doc_id')
        .inTable('documents')
        .notNullable();
      table.bigInteger('date_favorited').defaultTo(Date.now());
    })
    .createTable('user_fav_user', table => {
      table.bigIncrements('user_fav_user_id');
      table
        .bigInteger('user_id')
        .references('user_id')
        .inTable('users')
        .notNullable();
      table
        .bigInteger('fav_user')
        .references('user_id')
        .inTable('users')
        .notNullable();
      table.bigInteger('date_favorited').defaultTo(Date.now());
    })
    .createTable('user_code_rating', table => {
      table.bigIncrements('code_rating_id');
      table
        .bigInteger('rated_by')
        .references('user_id')
        .inTable('users')
        .notNullable();
      table
        .bigInteger('file_id')
        .references('file_id')
        .inTable('code_files')
        .notNullable();
      table.integer('file_rating').notNullable();
      table.bigInteger('date_rated').defaultTo(Date.now());
    })
    .createTable('user_doc_rating', table => {
      table.bigIncrements('doc_rating_id');
      table
        .bigInteger('rated_by')
        .references('user_id')
        .inTable('users')
        .notNullable();
      table
        .bigInteger('doc_id')
        .references('doc_id')
        .inTable('documents')
        .notNullable();
      table.integer('doc_rating').notNullable();
      table.bigInteger('date_rated').defaultTo(Date.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('user_doc_rating')
    .dropTable('user_code_rating')
    .dropTable('user_fav_user')
    .dropTable('user_fav_doc')
    .dropTable('user_fav_code')
    .dropTable('user_doc')
    .dropTable('user_code')
    .dropTable('documents')
    .dropTable('code_files')
    .dropTable('users');
};
