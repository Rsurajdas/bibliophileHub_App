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

export const getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userId)
    .populate({ path: 'following', select: 'name photo' })
    .populate({ path: 'request_pending', select: 'name photo' });

  if (!user) {
    return next(new AppError('No user found by this id'), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: user,
    },
  });
});

export const getUserFriends = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userId).populate(
    'friends',
    'name email photo',
  );

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      friends: user.friends,
    },
  });
});

export const getUserFollowing = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userId).populate(
    'following',
    'name email photo',
  );

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      following: user.following,
    },
  });
});

export const getUserFollowers = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userId).populate(
    'followers',
    'name email photo',
  );

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      followers: user.followers,
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
    $addToSet: { request_sent: userId },
  });

  await User.findByIdAndUpdate(userId, {
    $addToSet: { request_pending: senderUserId },
  });

  res.status(200).json({
    status: 'success',
    message: 'Friend request sent successfully',
  });
});

export const acceptRequest = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const receiverId = req.user._id;

  await User.findByIdAndUpdate(receiverId, {
    $pull: { request_pending: userId },
    $addToSet: { friends: userId },
  });

  await User.findByIdAndUpdate(userId, {
    $pull: { request_sent: receiverId },
    $addToSet: { friends: receiverId },
  });

  res.status(200).json({
    status: 'success',
    message: 'Friend request accepted successfully',
  });
});

export const cancelRequest = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const receiverId = req.user._id;

  await User.findByIdAndUpdate(receiverId, {
    $pull: { request_pending: userId },
  });

  await User.findByIdAndUpdate(userId, {
    $pull: { request_sent: receiverId },
  });

  res.status(200).json({
    status: 'success',
    message: 'Friend request cancelled successfully',
  });
});

export const getUserRequestSent = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userId).populate(
    'request_sent',
    'name email photo',
  );

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      users: user.request_sent,
    },
  });
});

export const getUserRequestPending = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userId).populate(
    'request_pending',
    'name email photo',
  );

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      users: user.request_pending,
    },
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

export const unFollowUser = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const followerUserId = req.user._id;

  await User.findByIdAndUpdate(followerUserId, {
    $pull: { following: userId },
  });

  await User.findByIdAndUpdate(userId, {
    $pull: { followers: followerUserId },
  });

  res.status(200).json({
    status: 'success',
    message: 'Unfollowed successfully',
  });
});

export const searchMember = catchAsync(async (req, res, next) => {
  const { query } = req.query;

  if (!query) {
    return next(new AppError('Please provide a search query', 400));
  }
  const users = await User.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { email: { $regex: query, $options: 'i' } },
    ],
  });
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

export const removeFriend = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const friend = await User.findById(req.params.friendId);

  if (!user || !friend) {
    return next(new AppError('User or friend not found', 404));
  }

  user.friends.pull(req.params.friendId);
  await user.save();

  friend.friends.pull(req.user._id);
  await friend.save();

  res.status(200).json({
    status: 'success',
    message: 'Friend removed successfully',
  });
});
