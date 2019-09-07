const  Book = require('../models/Book')
exports.home = async(req, res) => {
  const books = await Book.find().populate('author')
  res.render('index', {books})
}


