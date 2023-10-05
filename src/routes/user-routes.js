const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/getAllUsers', userController.getAllUsers);
router.post('/createUser', userController.createUser);
router.post('/login', userController.login);

module.exports = router;
