import express from 'express';
import {
  getAllGenre,
  createGenre,
  getGenre,
  updateGenre,
  deleteGenre,
} from '../../controllers/genreController';
import { protect, restrictedTo } from '../../controllers/authController';

const genreRouter = express.Router();

genreRouter
  .route('/')
  .get(getAllGenre)
  .post(protect, restrictedTo('admin'), createGenre);
genreRouter
  .route('/:id')
  .get(getGenre)
  .patch(protect, restrictedTo('admin'), updateGenre)
  .delete(protect, restrictedTo('admin'), deleteGenre);

export default genreRouter;
