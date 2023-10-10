const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../database/db'); 
class UserRole extends Model {}

sequelize
  .authenticate()
  .then(() => {
    console.log('UserRole model connected to the database.');
  })
  .catch((err) => {
    console.error('UserRole model unable to connect to the database:', err);
  });


UserRole.init({
  // Model attributes are defined here
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    // primaryKey: true,
    allowNull: false,
  },
  // common
  // id: {
  //   type: DataTypes.INTEGER,
  //   unique: true,
  //   primaryKey: true,
  //   allowNull: false,
  //   autoIncrementIdentity: true
  // },
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
  modelName: 'userRole',
  schema: 'security',
});

module.exports = UserRole;