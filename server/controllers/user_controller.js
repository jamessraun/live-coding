const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
require('dotenv').config()
const methods = {}

methods.signin = function(req, res) {
  let user = req.user
  let username = req.user.username
  let token = jwt.sign({
    name: req.user.name,
    username: req.user.username,
    email: req.user.email,
    _id: req.user._id
  }, process.env.SECRET_KEY);
  res.send({
    token: token,
    username: username
  })
}

methods.signup = function(req, res) {
  console.log(req.body);
  let data = req.body
  data.password = bcrypt.hashSync(req.body.password, saltRounds);
  User.find({
      username: req.body.username
    })
    .exec((error, records) => {
      if (error) {
        res.json({
          error
        })
      } else {
        let source = data
        if (records.length !== 0) {
          res.json(records)
        } else {
          User.create(source, function(error, user) {
            if (error) {
              res.json({
                error
              })
            } else {
              res.json(user)
            }
          })
        }
      }
    })

}

module.exports = methods
