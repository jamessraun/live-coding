const Article = require('../models/article')
const methods = {}

methods.createArticle = function(req, res){
	let user_id = req.decoded._id;

	let new_article = {
		title : req.body.title,
		content : req.body.content,
		category : req.body.category,
		author : user_id
	}

	Article.create( new_article, function(error, record){
    if(error){
      res.json({error})
    } else {
			res.json(record)
    }
  })
}

methods.getArticles = function(req, res){
	Article.find({}, function(error, record){
    if(error){
      res.json({error})
    } else {
			res.json(record)
    }
  })
}



module.exports = methods
