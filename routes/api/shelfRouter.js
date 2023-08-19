import express from 'express';
import { protect, restrictedTo } from '../../controllers/authController';
import {
  createShelf,
  deleteShelf,
  getAllShelf,
  updateShelf,
} from '../../controllers/shelfController';

const shelfRouter = express.Router();

shelfRouter
  .route('/')
  .get(protect, restrictedTo('user'), getAllShelf)
  .post(protect, restrictedTo('user'), createShelf);

shelfRouter
  .route('/:id')
  .patch(protect, restrictedTo('user'), updateShelf)
  .delete(protect, restrictedTo('user'), deleteShelf);

export default shelfRouter;
