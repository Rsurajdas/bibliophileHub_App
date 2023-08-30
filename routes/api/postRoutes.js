import express from 'express';
import { protect, restrictedTo } from '../../controllers/authController';
import {
  getAllUserPost,
  getSocialPosts,
  likeAPost,
} from '../../controllers/postController';

const postRouter = express.Router();

postRouter
  .route('/')
  .get(protect, restrictedTo('user', 'author'), getAllUserPost);

postRouter.get(
  '/social-posts',
  protect,
  restrictedTo('user', 'author'),
  getSocialPosts,
);
postRouter.post(
  '/:postId/like',
  protect,
  restrictedTo('user', 'author'),
  likeAPost,
);

export default postRouter;
