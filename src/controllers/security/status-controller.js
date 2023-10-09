const Status = require('../../models/security/status');


const getAllStatuses = async (req, res) => {
  try {
    const statuses = await Status.findAll();
    return res.status(201).json({
      statuses: statuses,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

const createStatus= async (req, res) => {
  try {
    const newStatus = await Status.create(req.body);
    return res.status(201).json({
      status: newStatus,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

module.exports = {
  getAllStatuses,
  createStatus,
};
