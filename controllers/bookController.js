import Book from '../models/bookModel';
import ApiFeatures from '../utils/apiFeatures';
import { catchAsync } from './../utils/catchAsync';
import AppError from './../utils/appError';

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
  const book = await Book.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      book,
    },
  });
});

export const getBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

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

export const deleteBook = catchAsync(async (req, res, next) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (!book) {
    return next(new AppError('No book found with that Id', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
