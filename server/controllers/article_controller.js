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
	Article.find({})
	.populate('author user')
	.exec((error, records) =>{
		if(error){
			res.json(error)
		}else {
			res.json(records)
		}
	})
}


methods.getArticleById = function(req, res){
	Article.findById({_id:req.params.id})
	.populate('author user')
	.exec((error, records) =>{
		if(error){
			res.json(error)
		}else {
			res.json(records)
		}
	})
}

methods.updateArticle = function(req, res){
	Article.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
	.then(response =>{
		res.json(response)
	})
}


methods.deleteArticle = function(req, res){
	Article.findByIdAndRemove(req.params.id)
	.then(response =>{
		res.json(response)
	})
}


module.exports = methods
