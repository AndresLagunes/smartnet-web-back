const Sequelize = require('sequelize');
const config = require('../config/config.json'); // Require your configuration file

const env = process.env.NODE_ENV || 'development'; // Set the environment based on NODE_ENV

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    host: config[env].host,
    dialect: config[env].dialect,
    logging: config[env].logging
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  
module.exports = {
  sequelize,
};
