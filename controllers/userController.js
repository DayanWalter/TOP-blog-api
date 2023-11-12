const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.user_post = asyncHandler(async (req, res, next) => {
  // Validate and Sanitize input
  const result = validationResult(req);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAuthor: req.body.isAuthor,
  });
  if (result.isEmpty()) {
    await user.save();
  }

  res.json({ user: 'user_create_post' });
});
exports.user_delete = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.json({ message: 'User deleted' });
});
exports.user_put = asyncHandler(async (req, res, next) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAuthor: req.body.isAuthor,
    _id: req.body.userid,
  });
  await User.findByIdAndUpdate(req.body.userid, user, {});
  res.json({ user: 'user_update_put' });
});
exports.user_detail = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).exec();

  if (user === null) {
    // No results.
    const err = new Error('User not found');
    err.status = 404;
    return next(err);
  }
  res.json({ user });
});
exports.user_list = asyncHandler(async (req, res, next) => {
  const allUser = await User.find().exec();
  res.json({ allUser });
});
