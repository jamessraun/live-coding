var express = require('express')
var router = express.Router()
var passport = require('passport');
var userController = require('../controllers/user_controller')
var articleController = require('../controllers/article_controller')
var helper = require('../helpers/auth')

router.post('/signup', userController.signup)
router.post('/signin', passport.authenticate('local', {session: false}), userController.signin)


router.get('/articles',articleController.getArticles)


module.exports = router;
