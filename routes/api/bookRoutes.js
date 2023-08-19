import express from 'express';
import {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from '../../controllers/bookController';
import { protect, restrictedTo } from '../../controllers/authController';

const bookRouter = express.Router();

bookRouter
  .route('/')
  .get(getAllBooks)
  .post(protect, restrictedTo('author', 'admin'), createBook);
bookRouter
  .route('/:id')
  .get(getBook)
  .patch(protect, restrictedTo('author', 'admin'), updateBook)
  .delete(protect, restrictedTo('author', 'admin'), deleteBook);

export default bookRouter;
