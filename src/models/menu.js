const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../database/db'); 
class Menu extends Model {}

sequelize
  .authenticate()
  .then(() => {
    console.log('Menu model connected to the database.');
  })
  .catch((err) => {
    console.error('Menu model unable to connect to the database:', err);
  });


Menu.init({
  // Model attributes are defined here
  idMenuParent: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  menuName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  idHtml: {
    type: DataTypes.STRING,
    allowNull: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  system: {
    type: DataTypes.STRING,
    allowNull: true
  },
  expandable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  transfersTo: {
    type: DataTypes.STRING,
    allowNull: true,    
  },
  page: {
    type: DataTypes.STRING,
    allowNull: true,    
  },
  exclusiveServiceId: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },

  applicationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
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
  modelName: 'menu',
  schema: 'security',
});

module.exports = Menu;