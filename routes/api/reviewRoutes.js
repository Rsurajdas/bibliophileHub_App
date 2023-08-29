import express from 'express';
import {
  createReview,
  getReviewByUserId,
  updateReviewByUserId,
} from '../../controllers/reviewController';
import { protect, restrictedTo } from '../../controllers/authController';

const reviewRouter = express.Router({ mergeParams: true });

reviewRouter
  .route('/')
  .post(protect, restrictedTo('user'), createReview)
  .get(protect, restrictedTo('user'), getReviewByUserId)
  .patch(protect, restrictedTo('user'), updateReviewByUserId);

export default reviewRouter;
