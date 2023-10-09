const User = require("../models/security/user");
const Role = require("../models/security/role");
const Application = require("../models/security/application");
const Status = require("../models/security/status");
const MenuRole = require("../models/security/menu-role");
const UserRole = require("../models/security/user-role");

const { sequelize } = require("../../database/db"); // Import the sequelize instance

const createAssociations = require("./security/security-associations");
createAssociations(sequelize);

sequelize.sync({ force: false }).then(() => {
    console.log("Database syncronized");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

module.exports = {
  //exportar modelos
  User,
  Application,
  Role,
  Status,
  MenuRole,
  UserRole,
};
