const User = require('./user');
const Role = require('./role');
const Application = require('./application');
const Menu = require('./menu');
const MenuRole = require('./menu-role');
const UserRole = require('./user-role');
const Status = require('./status');

module.exports = (sequelize) => {
  
  //USER
  User.belongsTo(Application);
  User.belongsTo(Status);
  // User.hasOne(UserRole);


  //ROLE
  Role.belongsTo(Application);
  Role.belongsTo(Status);
  // Role.hasMany(UserRole);

  Menu.belongsTo(Application);

  //APPLICATION
  Application.hasMany(Role);
  Application.hasMany(User);
  // Application.hasMany(MenuRole);

  //MENU

  //MENU-ROLES
  MenuRole.belongsTo(Application);
  MenuRole.belongsTo(Role);

  //USER-ROLES
  UserRole.belongsTo(Role);
  UserRole.belongsTo(User);

  //STATUS
  Status.hasMany(User);
};
