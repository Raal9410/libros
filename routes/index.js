const express = require('express');
const router  = express.Router();
const {home} = require('../controllers/index.controller')
const {createBook, createBookForm, updateBook, updateBookForm} = require('../controllers/books')
const {catchErrors} = require('../middlewares/catchErrors')
const {createAuthor, createAuthorForm} = require('../controllers/authors')
/* GET home page */
router.get('/', home);

/*Get books*/ 
router.get('/create-book', createBookForm)
router.post('/create-book', catchErrors(createBook))
router.get('/edit-book', updateBookForm)
router.post('/edit-book', catchErrors(updateBook))
router.get('/authors-add', createAuthorForm)
router.post('/authors-add', catchErrors(createAuthor))
module.exports = router;
