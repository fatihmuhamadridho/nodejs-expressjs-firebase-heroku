const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.route('/users')
    .get(userController.index)
    .post(userController.store)

module.exports = router