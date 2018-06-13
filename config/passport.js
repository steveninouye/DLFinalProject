const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('./keys');

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
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret,
      callbackURL: '/auth/github/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('passport authenticating');
      // check if user already exists in our own db
      // already have this user
      // console.log('user is: ', profile);
      done(null, profile);
    }
  )
);
