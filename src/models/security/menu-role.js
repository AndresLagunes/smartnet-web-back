const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../database/db'); 
class MenuRole extends Model {}

sequelize
  .authenticate()
  .then(() => {
    console.log('MenuRole model connected to the database.');
  })
  .catch((err) => {
    console.error('MenuRole model unable to connect to the database:', err);
  });


MenuRole.init({
  // Model attributes are defined here
  menuId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  applicationId: {
    type: DataTypes.INTEGER,
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
  modelName: 'menuRole',
  schema: 'security',
});

module.exports = MenuRole;