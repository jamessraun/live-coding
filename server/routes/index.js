var express = require('express')
var router = express.Router()
var passport = require('passport');
var userController = require('../controllers/user_controller')

router.post('/signup', userController.signup)
router.post('/signin', passport.authenticate('local', {session: false}), userController.signin)
