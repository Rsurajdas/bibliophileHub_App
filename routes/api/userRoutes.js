import express from 'express';
import User from '../../models/userModel';
import {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} from '../../controllers/authController';

const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/login', login);
userRouter.post('/forgotPassword', forgotPassword);
userRouter.patch('/resetPassword/:token', resetPassword);
userRouter.patch('/updatePassword', protect, updatePassword);

userRouter.route('/').get(async (req, res) => {
  try {
    const users = await User.find().populate({ path: 'role' });
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});

export default userRouter;
