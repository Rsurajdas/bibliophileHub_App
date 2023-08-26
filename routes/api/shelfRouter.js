import express from 'express';
import { protect, restrictedTo } from '../../controllers/authController';
import {
  addBook,
  createShelf,
  deleteShelf,
  getAllBooksFromUserShelves,
  getAllShelf,
  getShelf,
  getShelvesContainingBook,
  removeBook,
  updateShelf,
} from '../../controllers/shelfController';

const shelfRouter = express.Router();

shelfRouter
  .route('/')
  .get(protect, restrictedTo('user'), getAllShelf)
  .post(protect, restrictedTo('user'), createShelf);

shelfRouter.get(
  '/all-books-user-shelves',
  protect,
  restrictedTo('user'),
  getAllBooksFromUserShelves,
);

shelfRouter
  .route('/:id')
  .get(protect, restrictedTo('user'), getShelf)
  .patch(protect, restrictedTo('user'), updateShelf)
  .delete(protect, restrictedTo('user'), deleteShelf);

shelfRouter.post(
  '/add-book/:shelfId/:bookId',
  protect,
  restrictedTo('user'),
  addBook,
);

shelfRouter.post(
  '/remove-book/:shelfId/:bookId',
  protect,
  restrictedTo('user'),
  removeBook,
);

shelfRouter.get(
  '/get-shelves-by-book/:bookId',
  protect,
  restrictedTo('user'),
  getShelvesContainingBook,
);

export default shelfRouter;
