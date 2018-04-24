const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController')

router.post('/login', controller.auth);

module.exports = router;