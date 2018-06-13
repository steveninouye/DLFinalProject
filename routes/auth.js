const router = require('express').Router();
const passport = require('passport');

const setRedirect = (req, res, next) => {
  req.session.redirectTo = req.headers.referer;
  next();
};

const successRedirect = (req, res) => {
  destination = req.session.redirectTo || '/';
  res.redirect(destination);
};

// auth logout
router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.redirect(req.headers.referer);
  });
});

// auth with github
router.get(
  '/login',
  setRedirect,
  passport.authenticate('github', { scope: [] })
);

// callback route for github to redirect to
// hand control to passport to use code to grab profile info
router.get(
  '/github/redirect',
  passport.authenticate('github'),
  successRedirect
);

router.get('/check', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({});
  }
});

module.exports = router;
