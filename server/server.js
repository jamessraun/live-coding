const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const cors = require('cors');
const bcrypt = require('bcrypt');
var index = require('./routes/index')
const app = express()


app.use(cors())

mongoose.connect('mongodb://localhost/articles');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/',index);

app.use(passport.initialize());

passport.use(new Strategy(function(username, password, cb) {
  let User = require('./models/user')
  console.log(username,password);
  User.findOne({
  username: username
  }, function(err, user) {
  if (err) cb(err)
  if (bcrypt.compareSync(password,user.password)) {
  cb(null, user)
  } else {
  cb('Wrong password')
  }
  })
}));

app.listen(3000)
