const MenuRole = require('../models/security/menu-role');

const getAllMenuRoles = (MenuRole) => async (req, res) => {
  const menuRoles = await MenuRole.findAll();
  res.json(menuRoles);
};

const createMenuRole = (MenuRole) => async (req, res) => {
  const newMenuRole = await MenuRole.create(req.body);
  res.json(newMenuRole);
};

module.exports = {
  getAllMenuRoles,
  createMenuRole,
};
