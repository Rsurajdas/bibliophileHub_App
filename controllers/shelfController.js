import Shelf from '../models/shelfModel';
import Book from '../models/bookModel';
import { catchAsync } from '../utils/catchAsync';
import AppError from '../utils/appError';
import { deleteOne } from './handlerFunctions';

export const getAllShelf = catchAsync(async (req, res, next) => {
  const shelves = await Shelf.find({ user: req.user._id });

  res.status(200).json({
    status: 'success',
    results: shelves.length,
    data: {
      shelves,
    },
  });
});

export const createShelf = catchAsync(async (req, res, next) => {
  if (!req.body.shelf_name) {
    return next(new AppError('Shelf name cant be empty', 405));
  }
  const shelf = new Shelf({
    shelf_name: req.body.shelf_name,
    user: req.user._id,
  });

  await shelf.save();

  res.status(201).json({
    status: 'success',
    data: {
      shelf,
    },
  });
});

export const getShelf = catchAsync(async (req, res, next) => {
  const shelf = await Shelf.findById(req.params.id).populate({ path: 'books' });

  if (!shelf) {
    return next(new AppError('No shelf found with that Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      shelf,
    },
  });
});

export const updateShelf = catchAsync(async (req, res, next) => {
  const shelf = await Shelf.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!shelf) {
    return next(new AppError('No shelf found with that Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      shelf,
    },
  });
});

export const deleteShelf = catchAsync(async (req, res, next) => {
  const shelf = await Shelf.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!shelf) {
    return next(new AppError('No shelf found by this id', 404));
  }

  await shelf.remove();

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

export const addBook = catchAsync(async (req, res, next) => {
  const userShelves = await Shelf.find({ user: req.user._id });

  if (!userShelves) {
    return next(new AppError('No shelves found for the user', 404));
  }

  for (const shelf of userShelves) {
    if (shelf.books.includes(req.params.bookId)) {
      return next(
        new AppError('Book already exists in a shelf for this user', 400),
      );
    }
  }

  const userShelf = await Shelf.findOne({
    user: req.user._id,
    _id: req.params.shelfId,
  });

  if (!userShelf) {
    return next(new AppError('User Shelf not found', 404));
  }

  if (userShelf.books.includes(req.params.bookId)) {
    return next(new AppError('Book already exits in the shelf', 400));
  }

  userShelf.books.push(req.params.bookId);
  await userShelf.save();

  res.status(200).json({
    status: 'success',
    message: 'Book added to the shelf successfully ',
  });
});

export const getAllBooksFromUserShelves = catchAsync(async (req, res, next) => {
  const userShelves = await Shelf.find({ user: req.user._id });

  if (!userShelves) {
    return next(new AppError('No shelves found for the user', 404));
  }

  const bookIds = userShelves.flatMap((shelf) => shelf.books);

  const books = await Book.find({ _id: { $in: bookIds } });

  res.status(200).json({
    status: 'success',
    data: {
      books,
    },
  });
});

export const removeBook = catchAsync(async (req, res, next) => {
  const userShelf = await Shelf.findOne({
    user: req.user._id,
    _id: req.params.shelfId,
  });

  if (!userShelf) {
    return next(new AppError('No shelves found for the user', 404));
  }

  userShelf.books = userShelf.books.filter(
    (id) => id.toString() !== req.params.bookId,
  );
  await userShelf.save();

  res.status(200).json({
    status: 'success',
    message: 'Book removed from the shelf successfully',
  });
});

export const getShelvesContainingBook = catchAsync(async (req, res, next) => {
  const shelvesWithBook = await Shelf.find({ books: req.params.bookId });

  if (!shelvesWithBook || shelvesWithBook.length === 0) {
    return next(new AppError('No shelves found containing the book', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      shelves: shelvesWithBook,
    },
  });
});
