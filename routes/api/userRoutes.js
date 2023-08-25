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
  deleteAccount,
  followUser,
  getAllUsers,
  getUser,
  resizeUserImage,
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

userRouter.get('/get-user', protect, getUser);

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

export default userRouter;
