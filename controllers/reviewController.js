import Review from '../models/reviewModel';
import AppError from '../utils/appError';
import { catchAsync } from '../utils/catchAsync';
import { deleteOne } from './handlerFunctions';
import Post from '../models/postModel';

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

  console.log(req.user.name);

  const post = new Post({
    user: req.user._id,
    book: req.params.bookId,
    text: `${req.user.name} wrote a review for the book`,
  });
  await post.save();

  res.status(201).json({
    status: 'success',
    data: {
      review,
    },
  });
});

export const deleteReview = deleteOne(Review);

export const getReviewByUserId = catchAsync(async (req, res, next) => {
  const review = await Review.findOne({
    user: req.user._id,
    book: req.params.bookId,
  }).select('rating review');

  if (!review) {
    return next(new AppError('No review found by this Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      review,
    },
  });
});

export const updateReviewByUserId = catchAsync(async (req, res, next) => {
  const review = await Review.findOneAndUpdate(
    {
      user: req.user._id,
      book: req.params.bookId,
    },
    req.body,
    { new: true },
  ).select('rating review');

  if (!review) {
    return next(new AppError('No review found by this Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      review,
    },
  });
});
