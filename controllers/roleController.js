import Role from '../models/roleModel';

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({
      status: 'success',
      results: roles.length,
      data: {
        roles,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        role,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
