const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../database/db'); 
class Role extends Model {}

sequelize
  .authenticate()
  .then(() => {
    console.log('Role model connected to the database.');
  })
  .catch((err) => {
    console.error('Role model unable to connect to the database:', err);
  });


Role.init({
  // Model attributes are defined here
  roleName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },

  // ??
  bReqSuc: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  bReqProv: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  idTipoCargo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },


  applicationId: {
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
  modelName: 'role',
  schema: 'security',
});

module.exports = Role;