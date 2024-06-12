var express = require('express');
var router = express.Router();
let mockDb = []
mockDb.push({id: 1, desc: "Cradle", author: "Will"})
mockDb.push({id: 2, desc: "Another Country", author: "James"})
mockDb.push({id: 3, desc: "Eragon", author: "Christopher"})
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json(mockDb)
});

router.get('/:id', function(req, res, next) {
    let bookId = req.params.authorName
    console.log(authorName)
    let book = mockDb.filter(x => x.id === bookId)
    console.log(book)
    res.status(200).json(book[0])
});

router.get('/author/:authorName', function(req, res, next) {
    let authorName = req.params.authorName
    console.log(authorName)
    let book = mockDb.filter(x => x.author === authorName)
    console.log(book)
    res.status(200).json(book[0])
});

module.exports = router;
