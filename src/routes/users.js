var express = require('express');
var router = express.Router();
const {authenticateToken} = require('../middleware/authenticateToken');
const { register, login, logout } = require('../controllers/authController');


router.post('/register', register);

router.post('/login', login);

router.post('/logout', authenticateToken, logout);

module.exports = router;
