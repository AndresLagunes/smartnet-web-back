const express = require('express');
const userRoutes = require('./user-routes');
const statusRoutes = require('./status-routes');
const applicationRoutes = require('./application-routes');

const router = express.Router();

// Define your routes here
router.use('/users', userRoutes);
router.use('/statuses', statusRoutes);
router.use('/applications', applicationRoutes);

module.exports = router;
