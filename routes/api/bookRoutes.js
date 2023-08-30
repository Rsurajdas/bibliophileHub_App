import express from 'express';
import {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
  searchBook,
  getAllBooksByGenre,
  aggregationBook,
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
bookRouter.get('/search', searchBook);
bookRouter
  .route('/:id')
  .get(protect, getBook)
  .patch(protect, restrictedTo('author', 'admin'), updateBook)
  .delete(protect, restrictedTo('author', 'admin'), deleteBook);
bookRouter.get('/get-books/:genreId', getAllBooksByGenre);
bookRouter.get('/genres/grouped-by-genres', aggregationBook);

export default bookRouter;
