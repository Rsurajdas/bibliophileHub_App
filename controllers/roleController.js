import Role from '../models/roleModel';
import { catchAsync } from './../utils/catchAsync';

export const getAllRoles = catchAsync(async (req, res) => {
  const roles = await Role.find();
  res.status(200).json({
    status: 'success',
    results: roles.length,
    data: {
      roles,
    },
  });
});

export const createRole = catchAsync(async (req, res) => {
  const role = await Role.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      role,
    },
  });
});
