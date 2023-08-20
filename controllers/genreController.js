import Genre from '../models/genreModel';
import { catchAsync } from './../utils/catchAsync';
import AppError from './../utils/appError';
import { deleteOne } from './handlerFunctions';

export const getAllGenre = catchAsync(async (req, res, next) => {
  const genres = await Genre.find();
  res.status(200).json({
    status: 'success',
    results: genres.length,
    data: {
      genres,
    },
  });
});

export const createGenre = catchAsync(async (req, res, next) => {
  const genre = await Genre.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      genre,
    },
  });
});

export const getGenre = catchAsync(async (req, res, next) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre) {
    return next(new AppError('No book found with that Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      genre,
    },
  });
});

export const updateGenre = catchAsync(async (req, res, next) => {
  const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!genre) {
    return next(new AppError('No book found with that Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      genre,
    },
  });
});

export const deleteGenre = deleteOne(Genre);

// export const addBooks = catchAsync(async (req, res, next) => {
//   const updatedGenre = await Genre.findByIdAndUpdate(
//     req.params.id,
//     { $push: { books: req.body.books } },
//     {
//       new: true,
//       runValidators: true,
//     },
//   ).populate('books');

//   if (!updatedGenre) {
//     return next(new AppError('No book found with that Id', 404));
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       genre: updatedGenre,
//     },
//   });
// });
