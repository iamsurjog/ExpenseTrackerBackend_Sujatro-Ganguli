var express = require('express');
var router = express.router;
const authenticateToken = require('../middleware/authenticateToken');

router.post('/', authenticateToken, function(req, res, next) {
        var data = { "message": "Expense added successfully", "id": "" }
        res.json(data)
});

router.put('/:id', authenticateToken, function(req, res, next) {
        var data = { "message": "Expense updated successfully" }
        res.json(data)
});

router.delete('/:id', authenticateToken, function(req, res, next) {
        var data = { "message": "Expense deleted successfully" }
        res.json(data)
});

module.exports = router;

