var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/register/', function(req, res, next) {
    const data = { "message": "User registered successfully", "uid": "" };
    res.json(data);
});

router.post('/login/', function(req, res, next) {
    const data = { "token": "", "message": "Login successful" };
    res.json(data);
});

router.post('/logout/', function(req, res, next) {
    const data = { "message": "Logout successful" };
    res.json(data);
});

module.exports = router;

