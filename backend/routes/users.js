var express = require('express');
var router = express.Router();
let topLevel = []
topLevel.push({id: 1, name: "Michael"})
topLevel.push({id: 2, name: "Jaylen"})
topLevel.push({id: 3, name: "Sabrina"})
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

module.exports = router;