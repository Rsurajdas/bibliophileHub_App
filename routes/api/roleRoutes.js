import express from 'express';
import { getAllRoles, createRole } from '../../controllers/roleController';
import { protect } from '../../controllers/authController';

const roleRouter = express.Router();

roleRouter.route('/').get(getAllRoles).post(protect, createRole);

export default roleRouter;
