import User from '../models/userModel';
import jwt from 'jsonwebtoken';
import AppError from '../utils/appError';
import { catchAsync } from '../utils/catchAsync';

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Please provide email or password', 401));
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Please provide valid email or password', 401));
  }
  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
  });
});

export const protect = async (req, res, next) => {
  try {
    // Getting token and check if it there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new Error('Please login to get access!');
    }
    next();
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};
