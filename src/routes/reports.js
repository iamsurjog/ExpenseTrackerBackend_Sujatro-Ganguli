var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/monthly/', function(req, res, next) {
    // const month = req.query.month;
    // const year = req.query.year; 
    const data = { "total": 0, "categories": { "Food": 2000, "Travel": 500 } }
    res.json(data);
});

router.get('/category/', function(req, res, next) {

    const category = req.query.category;
    const data = [ { "id": "", "title": "", "amount": 0, "date": "" } ]
    res.json(data);
});


module.exports = router;

