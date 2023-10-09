const express = require('express');
const roleController = require('../../controllers/security/role-controller');

const router = express.Router();

router.get('/getAllRoles', roleController.getAllRoles);
router.post('/createRole', roleController.createRole);
router.post('/editRole', roleController.editRole);
router.post('/deleteRole', roleController.deleteRole);

module.exports = router;
