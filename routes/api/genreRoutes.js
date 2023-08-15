import express from 'express';
import {
  getAllGenre,
  createGenre,
  getGenre,
  updateGenre,
  deleteGenre,
  addBooks,
} from '../../controllers/genreController';

const genreRouter = express.Router();

genreRouter.route('/').get(getAllGenre).post(createGenre);
genreRouter.route('/:id').get(getGenre).patch(updateGenre).delete(deleteGenre);
genreRouter.route('/:id/add-book').post(addBooks);

export default genreRouter;
