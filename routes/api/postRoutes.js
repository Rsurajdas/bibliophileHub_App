import express from 'express';
import { protect, restrictedTo } from '../../controllers/authController';
import {
  addComment,
  getAllUserPost,
  getSocialPosts,
  likeAPost,
  unlikeAPost,
} from '../../controllers/postController';

const postRouter = express.Router();

// postRouter.get('/', protect, restrictedTo('user', 'author'), getAllUserPost);

postRouter.get(
  '/get-posts/:userId',
  protect,
  restrictedTo('user', 'author'),
  getAllUserPost,
);
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
postRouter.post(
  '/:postId/unlike',
  protect,
  restrictedTo('user', 'author'),
  unlikeAPost,
);
postRouter.post(
  '/:postId/add-comment',
  protect,
  restrictedTo('user'),
  addComment,
);

export default postRouter;
