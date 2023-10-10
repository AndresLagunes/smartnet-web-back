const { Role, Status, Application } = require('../../models/');
// const Role = require('../models/user');
const bcrypt = require('bcrypt');


const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll({
      include: [
        {
          model: Status,
        },
        {
          model: Application,
        }
      ]
    });
    return res.status(201).json({
      roles: roles,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

const createRole = async (req, res) => {
  try {
    const { roleName, description, applicationId, statusId } = req.body;
    // console.log(req.body);
    const newRole = await Role.create({
      "roleName": roleName,
      "description": description,
      "applicationId": applicationId,
      "statusId": statusId
    });
    return res.status(201).json({
      user: newRole,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

const editRole = async (req, res) => {
  try {
    const { id, roleName, description, applicationId, statusId } = req.body;
    // console.log(id);
    const updatedRole = await Role.update({
      "roleName": roleName,
      "description": description,
      "applicationId": applicationId,
      "statusId": statusId
    }, {
      where: {
        id: id
      }
    });
    return res.status(201).json({
      // user: newRole,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const updatedRole = await Role.update({
      "statusId": 0
    }, {
      where: {
        id: id
      }
    });
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

module.exports = {
  getAllRoles,
  createRole,
  editRole,
  deleteRole,
};
