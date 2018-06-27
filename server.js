const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');

const PassportStrategy = require('./passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const knex = require('./knex/knex.js');
const PORT = process.env.PORT || '4000';

const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.COOKIE_KEY || 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
