import Review from '../models/reviewModel';
import { catchAsync } from '../utils/catchAsync';
import { deleteOne } from './handlerFunctions';

export const getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.bookId) filter = { book: req.params.bookId };

  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

export const createReview = catchAsync(async (req, res, next) => {
  if (!req.body.book) req.body.book = req.params.bookId;
  if (!req.body.user) req.body.user = req.user._id;

  const review = await Review.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      review,
    },
  });
});

export const deleteReview = deleteOne(Review);
