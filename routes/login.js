const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login')

router.route('/auth/login')
    .post(loginController.store)

module.exports = router