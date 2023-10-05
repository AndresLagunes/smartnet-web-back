const express = require('express');
const applicationController = require('../controllers/application-controller');

const router = express.Router();

router.get('/getAllApplications', applicationController.getAllApplications);
router.post('/createApplication', applicationController.createApplication);

module.exports = router;
