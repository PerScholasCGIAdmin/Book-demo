var express = require('express');
var router = express.Router();
let topLevel = []
topLevel.push({id: 1, name: "Michael", books :[]})
topLevel.push({id: 2, name: "Jaylen", books :[]})
topLevel.push({id: 3, name: "Sabrina", books :[]})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(topLevel)
});

router.get('/:id', function(req, res, next) {
  let userId = req.params.id
  console.log(userId)
  let task = topLevel.filter(x => x.id !== userId)
  console.log(task)
  res.status(200).json(task)
});


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

module.exports = router;