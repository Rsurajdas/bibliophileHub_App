import multer from 'multer';
import sharp from 'sharp';
import User from '../models/userModel';
import { catchAsync } from '../utils/catchAsync';
import AppError from '../utils/appError';

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new AppError('Not an image, Please upload only an image file', 404),
      false,
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadUserPhoto = upload.single('photo');

export const resizeUserImage = (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user._id}-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`./public/image/user/${req.file.filename}`);

  next();
};

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});

export const updateProfile = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword) {
    return next(new AppError('Your not allowed to perform this action!', 400));
  }

  const filteredBody = filterObj(req.body, 'name', 'email');

  if (req.file) filteredBody.photo = `/assets/image/user/${req.file.filename}`;

  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

export const deleteAccount = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

export const sendRequest = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const senderUserId = req.user._id;

  await User.findByIdAndUpdate(senderUserId, {
    $addToSet: { friends: userId },
  });

  res.status(200).json({
    status: 'success',
    message: 'Friend request sent successfully',
  });
});

export const acceptRequest = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const receiverId = req.user._id;

  await User.findByIdAndUpdate(receiverId, { $addToSet: { friends: userId } });

  await User.findByIdAndUpdate(userId, { $addToSet: { friends: receiverId } });

  res.status(200).json({
    status: 'success',
    message: 'Friend request accepted successfully',
  });
});

export const followUser = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const followerUserId = req.user._id;

  await User.findByIdAndUpdate(followerUserId, {
    $addToSet: { following: userId },
  });

  await User.findByIdAndUpdate(userId, {
    $addToSet: { followers: followerUserId },
  });

  res.status(200).json({
    status: 'success',
    message: 'You are now following this user',
  });
});
