var express = require('express');
var router = express.Router();


// Load the model
 const Book = require('../models/books');

// Get all books - @route   GET /books
router.get('/', (req, res) => {
    Book.find()
      .then(books => res.json(books))
      .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
  });

// Get book by id -  @route   GET /books/:id 
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
  });

// Get book by author -  @route   GET /books/author/:authorName 
router.get('/author/:authorName', (req, res) => {
    Book.findOne({ author: req.params.authorName }) 
      .then(book => {
          if (!book) {
              return res.status(404).json({ nobookfound: 'No Book found' });
          }
          res.json(book); // If found, respond with JSON of the book
      })
      .catch(err => res.status(400).json({ error: err.message })); // Handle any errors
});

// Add book - @route   POST /books
router.post('/', (req, res) => {
    Book.create(req.body)
      .then(book => res.json({ msg: 'Book added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
  });

// Delete book by id - @route   DELETE /books/:id 
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(book => res.json({ mgs: 'Book entry deleted' }))
      .catch(err => res.status(404).json({ error: 'No such a book' }));
  });

// Update book by id - @route -   PUT /books/:id
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

module.exports = router;
