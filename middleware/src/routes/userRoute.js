const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/get-all', controller.user)

module.exports = router;