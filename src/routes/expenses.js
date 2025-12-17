var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
        var data = { "message": "Expense added successfully", "id": "" }
        res.json(data)
});

router.put('/:id', function(req, res, next) {
        var data = { "message": "Expense updated successfully" }
        res.json(data)
});

router.delete('/:id', function(req, res, next) {
        var data = { "message": "Expense deleted successfully" }
        res.json(data)
});

module.exports = router;

