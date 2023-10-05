const Menu = require('../models/menu');

const getAllMenus = (Menu) => async (req, res) => {
  const menus = await Menu.findAll();
  res.json(menus);
};

const createMenu = (Menu) => async (req, res) => {
  const newMenu = await Menu.create(req.body);
  res.json(newMenu);
};

module.exports = {
  getAllMenus,
  createMenu,
};
