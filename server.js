const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const PassportStrategy = require('./config/passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/auth');
const knex = require('./knex/knex.js');
const PORT = process.env.PORT || 4000;

const app = express();

// app.use(morgan('dev'));
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(
  session({
    secret: keys.session.cookieKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.post('/api/db/search', (req, res) => {
  console.log(req.user);
  console.log('path hit: ', req.body.searchInput);
  const { searchInput } = req.body;
  knex('code_files')
    .where('file_code', 'like', `%${searchInput}%`)
    .then(data => {
      res.json(data);
    });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
