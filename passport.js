const passport = require('passport');
const knex = require('./knex/knex');
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('./config/keys');
console.log(keys);
console.log(process.env);
passport.serializeUser((user, done) => {
  const { id, username } = user;
  const usernameAndId = { id, username };
  done(null, usernameAndId);
});

passport.deserializeUser((usernameAndId, done) => {
  //   User.findById(id).then(user => {
  done(null, usernameAndId);
  //   });
});

passport.use(
  new GitHubStrategy(
    {
      // options for google strategy
      clientID: process.env.GITHUB_CLIENT_ID || keys.github.GITHUB_CLIENT_ID,
      clientSecret:
        process.env.GITHUB_CLIENT_SECRET || keys.github.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('passport authenticating');
      // check if user already exists in our own db
      // already have this user
      // console.log('user is: ', profile);
      knex('users')
        .select()
        .where('username', profile.username)
        .then(data => {
          if (data.length === 0) {
            console.log(
              'user not registered and needs to be saved into database'
            );
          } else {
            console.log(
              `User "${profile.username}" already exists in database`
            );
            done(null, profile);
          }
        });
      knex('users');
    }
  )
);
