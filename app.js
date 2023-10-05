const express = require('express');
const sequelize = require('./database/db'); 
const bodyParser = require('body-parser');
const models = require('./src/models/index'); // Import the central models file
const salesRoutes = require('./src/routes/index-sales-routes');
const securityRoutes = require('./src/routes/index-security-routes');
const cors = require('cors');

// console.log(models)

const app = express();
const PORT = process.env.PORT || 3000;

const allowedIPs = ['localhost', '127.0.0.1','http://localhost:9000', 'http://127.0.0.1:9000']; // Add your allowed IPs here

const corsOptions = {
  origin: function (origin, callback) {

    // Allow requests without an origin (e.g., requests made from Postman)
    if (!origin || allowedIPs.includes(origin)) {
      callback(null, true);
    } else {
      // console.log(origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

// Use the central routes file
app.use('/security', securityRoutes);
// app.use('/sales', salesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});