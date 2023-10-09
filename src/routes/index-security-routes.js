const express = require('express');
const userRoutes = require('./security/user-routes');
const statusRoutes = require('./security/status-routes');
const applicationRoutes = require('./security/application-routes');
const roleRoutes = require('./security/role-routes');

const router = express.Router();

// Define your routes here
router.use('/users', userRoutes);
router.use('/statuses', statusRoutes);
router.use('/applications', applicationRoutes);
router.use('/roles', roleRoutes);

module.exports = router;
