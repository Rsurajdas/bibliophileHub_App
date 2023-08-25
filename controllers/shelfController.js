import Shelf from '../models/shelfModel';
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
  if (!req.body.user) req.body.user = req.user._id;
  const shelf = await Shelf.create(req.body);

  res.status(201).json({
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

export const deleteShelf = deleteOne(Shelf);

export const addBook = catchAsync(async (req, res, next) => {
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
