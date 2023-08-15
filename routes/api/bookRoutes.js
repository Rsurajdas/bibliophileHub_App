import express from 'express';
import {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from '../../controllers/bookController';

const bookRouter = express.Router();

bookRouter.route('/').get(getAllBooks).post(createBook);
bookRouter.route('/:id').get(getBook).patch(updateBook).delete(deleteBook);

export default bookRouter;
