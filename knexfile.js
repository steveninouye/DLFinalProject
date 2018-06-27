const { db } = require('./config/keys');

const host = process.env.DB_URL || '127.0.0.1';
const user = process.env.DB_USER || 'kissit';
const password = process.env.DB_PASSWORD || 'teddyGrizzlyPandaBear';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: host,
      user: user,
      password: password,
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
