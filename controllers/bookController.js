import Book from '../models/bookModel';
import ApiFeatures from '../utils/apiFeatures';
import { catchAsync } from './../utils/catchAsync';
import AppError from './../utils/appError';
import { deleteOne } from './handlerFunctions';
import Review from '../models/reviewModel';

export const getAllBooks = catchAsync(async (req, res, next) => {
  const feature = new ApiFeatures(Book, req.query)
    .filter()
    .sort()
    .limitFields();

  const books = await feature.query
    .populate({ path: 'author', select: 'name photo followers' })
    .populate({
      path: 'genres',
      select: 'genre_name genre_name_encoded',
    });

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
  const book = await Book.findById(req.params.id)
    .populate({ path: 'author', select: 'name photo followers' })
    .populate({
      path: 'genres',
      select: 'genre_name genre_name_encoded',
    })
    .populate('shelves');

  if (!book) {
    return next(new AppError('No book found with that Id', 404));
  }

  const review = await Review.find({
    book: book._id,
    user: req.user._id,
  }).populate('user', 'name photo');

  res.status(200).json({
    status: 'success',
    data: {
      book,
      review,
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

export const getAllBooksByGenre = catchAsync(async (req, res, next) => {
  const books = await Book.find({ genres: req.params.genreId }).select(
    'title book_image',
  );

  res.status(200).json({
    status: 'success',
    results: books.length,
    data: {
      books,
    },
  });
});

export const aggregationBook = catchAsync(async (req, res, next) => {
  const aggregatedBooks = await Book.aggregate([
    {
      $lookup: {
        from: 'genres',
        localField: 'genres',
        foreignField: '_id',
        as: 'genres',
      },
    },
    {
      $unwind: '$genres',
    },
    {
      $group: {
        _id: '$genres._id',
        genre_name: { $first: '$genres.genre_name' },
        books: { $push: '$$ROOT' },
      },
    },
    {
      $project: {
        _id: 1,
        genre_name: 1,
        books: {
          $slice: [
            {
              $map: {
                input: '$books',
                as: 'book',
                in: {
                  _id: '$$book._id',
                  title: '$$book.title',
                  book_image: '$$book.book_image',
                },
              },
            },
            5,
          ],
        },
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    results: aggregatedBooks.length,
    data: aggregatedBooks,
  });
});
