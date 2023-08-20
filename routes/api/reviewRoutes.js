import express from 'express';
import {
  createReview,
  getAllReviews,
} from '../../controllers/reviewController';
import { protect, restrictedTo } from '../../controllers/authController';

const reviewRouter = express.Router({ mergeParams: true });

reviewRouter
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictedTo('user'), createReview);

export default reviewRouter;
