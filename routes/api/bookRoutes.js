import express from 'express';
import {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from '../../controllers/bookController';
import { protect, restrictedTo } from '../../controllers/authController';
import reviewRouter from './reviewRoutes';

const bookRouter = express.Router();

// Nested Routes
bookRouter.use('/:bookId/reviews', reviewRouter);

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
