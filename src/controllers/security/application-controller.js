const Application = require('../../models/security/application');


const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.findAll();
    return res.status(201).json({
      applications: applications,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

const createApplication= async (req, res) => {
  try {
    const newApplication = await Application.create(req.body);
    return res.status(201).json({
      application: newApplication,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', e: error });
  }
};

module.exports = {
  getAllApplications,
  createApplication,
};
