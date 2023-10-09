const express = require('express');
const userRoutes = require('./security/user-routes'); // Import your user routes here

const router = express.Router();

// Define your routes here
router.use('/users', userRoutes);

module.exports = router;
