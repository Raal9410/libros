const Book = require('../models/Book')
const Author = require('../models/Author')
exports.createBookForm = async(req,res)=>{
  const authors = await Author.find()
  res.render('create-book', {authors})
}
exports.createBook = async(req, res) => {
  const {title, description, author, rating} = req.body
  await Book.create({title, description, author, rating})
  res.redirect('/')
}

exports.updateBookForm = async (req, res) => {
const {bookid} = req.query
const book = await Book.findById(bookid)
const authors = await Author.find()
book.authors = authors
res.render('update-book', book)
}

exports.updateBook = async(req, res) => {
  const {title, description, author, rating} = req.body
  const {bookid} =req.query 
  await Book.findByIdAndUpdate(bookid, {title, description, author, rating})
  res.redirect('/')
}

/*
exports.getBooks
exports.getBook

exports.deleteBook
*/