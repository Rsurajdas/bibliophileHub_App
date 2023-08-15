import express from 'express';
import { getAllRoles, createRole } from '../../controllers/roleController';

const roleRouter = express.Router();

roleRouter.route('/').get(getAllRoles).post(createRole);

export default roleRouter;
