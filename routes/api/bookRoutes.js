import express from 'express';
import {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from '../../controllers/bookController';
import { protect } from '../../controllers/authController';

const bookRouter = express.Router();

bookRouter.route('/').get(getAllBooks).post(protect, createBook);
bookRouter
  .route('/:id')
  .get(getBook)
  .patch(protect, updateBook)
  .delete(protect, deleteBook);

export default bookRouter;
