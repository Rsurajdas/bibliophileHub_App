import Post from '../models/postModel';
import User from '../models/userModel';
import { catchAsync } from '../utils/catchAsync';
import AppError from '../utils/appError';

export const getAllUserPost = catchAsync(async (req, res, next) => {
  const userPosts = await Post.find({ user: req.params.userId }).populate(
    'user book likes comments.user',
  );

  res.status(200).json({
    status: 'success',
    results: userPosts.length,
    data: {
      posts: userPosts,
    },
  });
});

export const getSocialPosts = catchAsync(async (req, res, next) => {
  const user = await User.findById({ _id: req.user._id });
  const friends = user.friends;
  const followers = user.followers;
  const following = user.following;

  if (!user) {
    return next(new AppError('No user found by this id', 404));
  }

  const socialUsers = [...friends, ...followers, ...following];

  const posts = await Post.find({ user: { $in: socialUsers } }).populate(
    'user book comments.user',
  );

  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: {
      posts: posts,
    },
  });
});

export const likeAPost = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  if (post.likes.includes(req.user._id)) {
    return next(new AppError('You already liked this post', 404));
  }

  post.likes.push(req.user._id);
  await post.save();

  res.status(200).json({
    status: 200,
    post,
    message: 'Like added successfully',
    numLikes: post.likes.length,
  });
});

export const unlikeAPost = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  if (!post.likes.includes(req.user._id)) {
    return next(new AppError('You have not liked this post', 404));
  }

  post.likes = post.likes.filter(
    (like) => like.toString() !== req.user._id.toString(),
  );

  await post.save();

  res.status(200).json({
    status: 200,
    post,
    message: 'Like removed successfully',
    numLikes: post.likes.length,
  });
});

export const addComment = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.postId).populate(
    'user book comments.user',
  );

  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  const comment = {
    user: req.user._id,
    text: req.body.text,
  };

  post.comments.push(comment);
  await post.save();

  await post
    .populate({
      path: 'comments.user',
      select: 'name photo',
    })
    .execPopulate();

  res.status(200).json({
    status: 'success',
    post,
    message: 'Comment added successfully',
  });
});
