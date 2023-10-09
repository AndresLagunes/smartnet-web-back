const express = require('express');
const statusController = require('../../controllers/security/status-controller');

const router = express.Router();

router.get('/getAllStatuses', statusController.getAllStatuses);
router.post('/createstatus', statusController.createStatus);

module.exports = router;
