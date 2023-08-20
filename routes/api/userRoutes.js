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
  deleteAccount,
  getAllUsers,
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
userRouter.patch('/updateProfile', protect, uploadUserPhoto, updateProfile);
userRouter.delete('/deleteAccount', protect, deleteAccount);

export default userRouter;
