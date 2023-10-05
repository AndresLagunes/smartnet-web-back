const User = require("../models/user");
const Role = require("../models/role");
const Application = require("../models/application");
const Status = require("../models/status");
const MenuRole = require("../models/menu-role");
const UserRole = require("../models/user-role");

const { sequelize } = require("../../database/db"); // Import the sequelize instance

const createAssociations = require("./associations");
createAssociations(sequelize);

sequelize.sync({ force: true }).then(() => {
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
