const { User, Status, Application, UserRole, Role } = require('../../models/');
// const User = require('../models/user');
const bcrypt = require('bcrypt');


const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Status,
        },
        {
          model: Application,
        },
        {
          model: UserRole,
          include: [
            {
              model: Role
            }
          ]
        }
      ]
    });
    return res.status(201).json({
      users: users,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password, applicationId, statusId } = req.body;
    const { roleId } = req.body;
    const newUser = await User.create({
      "username": username,
      "password": password,
      "applicationId": applicationId,
      "statusId": statusId
    });
    const newUseRole = await UserRole.create({
      "userId": newUser.id,
      "roleId": roleId,
      "statusId": 1,
    })
    return res.status(201).json({
      user: newUser,
      userRole: newUseRole,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

const editUser = async (req, res) => {
  try {
    const { id, username, password, roleId, applicationId, statusId } = req.body;
    // console.log(id);
    const updatedUser = await User.update({
      "username": username,
      // "password": password,
      "applicationId": applicationId,
      "statusId": statusId
    }, {
      where: {
        id: id
      }
    });
    const updatedUserRole = await UserRole.update({
      "roleId": roleId,
    }, {
      where: {
        "userId": id
      }
    });
    return res.status(201).json({
      // user: newUser,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const updatedUser = await User.update({
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

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(password)
  try {
    // Find the user by username (or email)
    const user = await User.findOne({ where: { username } });
    
    console.log(user);
    // If the user does not exist, return an error response
    if (!user) {
      return res.json({ error: 'Usuario o contraseña incorrecto', success: false });
    }
    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is valid, return a success response with the user data
    if (isPasswordValid) {
      return res.json({
        user: user,
        success: true,
      });
    } else {
      return res.json({ error: 'Usuario o contraseña incorrecto', success: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }

};

module.exports = {
  getAllUsers,
  createUser,
  editUser,
  deleteUser,
  login,
};
