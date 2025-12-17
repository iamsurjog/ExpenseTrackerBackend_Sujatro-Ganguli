var express = require('express');
var router = express.router;
const authenticateToken = require('../middleware/authenticateToken');
const { register, login, logout } = require('../controllers/authController');


router.post('/register', register);

router.post('/login', login);

router.post('/logout', authenticateToken, logout);

module.exports = router;
