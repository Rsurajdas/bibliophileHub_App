import express from 'express';
import {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictedTo,
} from '../../controllers/authController';
import {
  acceptRequest,
  cancelRequest,
  deleteAccount,
  followUser,
  getAllUsers,
  getUser,
  getUserFollowers,
  getUserFollowing,
  getUserFriends,
  getUserRequestPending,
  getUserRequestSent,
  removeFriend,
  resizeUserImage,
  searchMember,
  sendRequest,
  unFollowUser,
  updateProfile,
  uploadUserPhoto,
} from '../../controllers/userController';

const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/login', login);
userRouter.post('/forgotPassword', forgotPassword);
userRouter.patch('/resetPassword/:token', resetPassword);
userRouter.patch('/updatePassword', protect, updatePassword);

userRouter.route('/').get(protect, restrictedTo('admin'), getAllUsers);
userRouter.get('/get-user/:userId', protect, getUser);
userRouter.patch(
  '/updateProfile',
  protect,
  uploadUserPhoto,
  resizeUserImage,
  updateProfile,
);
userRouter.delete('/deleteAccount', protect, deleteAccount);
userRouter.post(
  '/send-request/:id',
  protect,
  restrictedTo('user', 'author'),
  sendRequest,
);
userRouter.post(
  '/accept-request/:id',
  protect,
  restrictedTo('user', 'author'),
  acceptRequest,
);
userRouter.post(
  '/cancel-request/:id',
  protect,
  restrictedTo('user', 'author'),
  cancelRequest,
);
userRouter.post(
  '/follow/:id',
  protect,
  restrictedTo('user', 'author'),
  followUser,
);
userRouter.post(
  '/unfollow/:id',
  protect,
  restrictedTo('user', 'author'),
  unFollowUser,
);
userRouter.get(
  '/search-member',
  protect,
  restrictedTo('user', 'author'),
  searchMember,
);
userRouter.get(
  '/friends/:userId',
  protect,
  restrictedTo('user', 'author'),
  getUserFriends,
);
userRouter.get(
  '/following/:userId',
  protect,
  restrictedTo('user', 'author'),
  getUserFollowing,
);
userRouter.get(
  '/followers/:userId',
  protect,
  restrictedTo('user', 'author'),
  getUserFollowers,
);
userRouter.get(
  '/request_sent/:userId',
  protect,
  restrictedTo('user', 'author'),
  getUserRequestSent,
);
userRouter.get(
  '/request_pending/:userId',
  protect,
  restrictedTo('user', 'author'),
  getUserRequestPending,
);
userRouter.post(
  '/unfriend/:friendId',
  protect,
  restrictedTo('user'),
  removeFriend,
);

export default userRouter;
