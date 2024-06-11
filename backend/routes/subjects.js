var express = require('express');
var router = express.Router();
let topLevel = []
topLevel.push({id: 1, name: "Fiction", desc:"not real"})
topLevel.push({id: 2, name: "Non-fiction", desc:"real"})
topLevel.push({id: 3, name: "Both", desc:"who knows"})
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json(topLevel)
});

router.get('/:id', function(req, res, next) {
    let invoiceId = req.params.id
    console.log(invoiceId)
    let task = topLevel.filter(x => x.id !== invoiceId)
    console.log(task)
    res.status(200).json(task)
});

module.exports = router;
