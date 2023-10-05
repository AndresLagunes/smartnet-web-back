const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../database/db'); 
const bcrypt = require('bcrypt');

class User extends Model {}

sequelize
  .authenticate()
  .then(() => {
    console.log('User model connected to the database.');
  })
  .catch((err) => {
    console.error('User model unable to connect to the database:', err);
  });


User.init({
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastActivityDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  applicationId: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
    allowNull: false,
    defaultValue: 1
  },
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
  modelName: 'user',
  schema: 'security',
  // freezeTableName: true
});

User.beforeCreate(async (User, options) => {
  const hashedPassword = await bcrypt.hash(User.password, 10); // Use an appropriate number of salt rounds
  User.password = hashedPassword;
});
module.exports = User;