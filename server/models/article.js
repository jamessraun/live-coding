const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
	content: String,
  category: String,
  created: {
    type: Date,
    default: Date.now
  }
})

const Article = mongoose.model('article', articleSchema)

module.exports = Article
