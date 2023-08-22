import Book from '../models/bookModel';
import ApiFeatures from '../utils/apiFeatures';
import { catchAsync } from './../utils/catchAsync';
import AppError from './../utils/appError';
import { deleteOne } from './handlerFunctions';

export const getAllBooks = catchAsync(async (req, res, next) => {
  const feature = new ApiFeatures(Book, req.query)
    .filter()
    .sort()
    .limitFields()
    .pagination();

  const books = await feature.query;
  res.status(200).json({
    status: 'success',
    results: books.length,
    data: {
      books,
    },
  });
});

export const createBook = catchAsync(async (req, res, next) => {
  if (!req.body.author) req.body.author = req.user._id;
  const book = await Book.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      book,
    },
  });
});

export const getBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id).populate('reviews');

  if (!book) {
    return next(new AppError('No book found with that Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      book,
    },
  });
});

export const updateBook = catchAsync(async (req, res, next) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!book) {
    return next(new AppError('No book found with that Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      book,
    },
  });
});

export const deleteBook = deleteOne(Book);

export const searchBook = catchAsync(async (req, res, next) => {
  const books = await Book.find({
    $or: [{ title: { $regex: req.query.title } }],
  });

  res.status(200).json({
    status: 'success',
    results: books.length,
    data: {
      books,
    },
  });
});
