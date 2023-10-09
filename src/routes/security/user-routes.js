const express = require('express');
const userController = require('../../controllers/security/user-controller');

const router = express.Router();

router.get('/getAllUsers', userController.getAllUsers);
router.post('/createUser', userController.createUser);
router.post('/editUser', userController.editUser);
router.post('/deleteUser', userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;
