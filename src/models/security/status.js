const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../database/db'); 

class Status extends Model {}



Status.init({
  // Model attributes are defined here
  statusName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  // common
  // id: {
  //   type: DataTypes.INTEGER,
  //   unique: true,
  //   primaryKey: true,
  //   allowNull: false,
  //   autoIncrementIdentity: true
  // },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'status',
  schema: 'security',
});

module.exports = Status;