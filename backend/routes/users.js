var express = require('express');
var router = express.Router();

// Load the model
const Users = require('../models/users');
const Book = require('../models/books');

// Get all users - @route   GET /users
router.get('/', (req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nobooksfound: 'No users found' }));
});


// Get users by id -  @route   GET /users/:id 
router.get('/:id', (req, res) => {
  Users.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nouserfound: 'No User found' }));
});


// Add user - @route   POST /users
router.post('/', (req, res) => {
  Users.create(req.body)
    .then(users => res.json({ msg: 'user added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this User' }));
});

// add a book to a user - @route POST /users/addBook
router.post('/addBook', async (req, res) => {
  const { userId, bookId } = req.body;
  
  console.log("Adding book " + bookId + " to user " + userId)
  try {
    const user = await Users.findById(userId).populate('books');
    const newBook = await Book.findById(bookId);
    // Add the new book to the user's books array
    // Figure out a bug here on why its breaking
    user.books.push(newBook);
    
    // Save the user document
    await user.save();
    
    // Respond with the updated user document
    res.status(200).json(user); 
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;



/*
router.post('/addBook', function(req, res, next) {
  let userId = req.body.userId
  let bookId = req.body.bookId
  console.log(userId)
  let user = topLevel.filter(x => x.id === userId)
  console.log("user is " + user.id)
  let otherUsers = topLevel.filter(x => x.id !== userId)
  user.books.push(bookId)
  console.log("adding book: " + bookId + " to user " + userId)
  topLevel = otherUsers.push(user)
  res.status(200)
});
*/
module.exports = router;