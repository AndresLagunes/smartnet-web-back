const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../database/db'); 
class Application extends Model {}

sequelize
  .authenticate()
  .then(() => {
    console.log('Application model connected to the database.');
  })
  .catch((err) => {
    console.error('Application model unable to connect to the database:', err);
  });


Application.init({
  // Model attributes are defined here
  applicationName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },


  // common
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
    autoIncrementIdentity: true
  },
  statusId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'application',
  schema: 'security',
});


module.exports = Application;