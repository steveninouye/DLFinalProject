module.exports = {
  PORT: '80',
  github: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
  },
  session: {
    COOKIE_KEY: process.env.COOKIE_KEY
  },
  db: {
    DB_USER: process.env.DB_USER,
    DB_URL: process.env.DB_URL,
    DB_PASSWORD: process.env.DB_PASSWORD
  }
};
