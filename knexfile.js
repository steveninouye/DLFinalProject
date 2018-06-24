const { db } = require('./config/keys');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_URL || db.DB_URL,
      user: process.env.DB_USER || db.DB_USER,
      password: process.env.DB_PASSWORD || db.DB_PASSWORD,
      database: 'kissit',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
};
