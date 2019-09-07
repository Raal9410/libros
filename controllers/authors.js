const Author = require('../models/Author')
exports.createAuthorForm = (req, res) => {
  res.render('user-add')
}

exports.createAuthor = async(req,res) => {
const {name, lastName, birthday, nationality, pictureUrl} = req.body
await Author.create({name, lastName, birthday, nationality, pictureUrl})
res.redirect('/')
}