import express from 'express';
import {
  getAllGenre,
  createGenre,
  getGenre,
  updateGenre,
  deleteGenre,
  addBooks,
} from '../../controllers/genreController';
import { protect, restrictedTo } from '../../controllers/authController';

const genreRouter = express.Router();

genreRouter.route('/').get(getAllGenre).post(protect, createGenre);
genreRouter
  .route('/:id')
  .get(getGenre)
  .patch(protect, restrictedTo('author', 'admin'), updateGenre)
  .delete(protect, deleteGenre);
genreRouter.route('/:id/add-book').post(protect, addBooks);

export default genreRouter;
