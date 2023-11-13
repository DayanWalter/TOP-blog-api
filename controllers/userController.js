const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

const bcrypt = require('bcryptjs');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.user_post = asyncHandler(async (req, res, next) => {
  // Validate and Sanitize input
  const result = validationResult(req);

  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      isAuthor: req.body.isAuthor,
    });
    if (result.isEmpty()) {
      await user.save();
    }
    res.json({ user, message: 'User created' });
  });
});
exports.user_delete = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user === null) {
    // No results.
    const err = new Error('User not found');
    err.status = 404;
    return next(err);
  }

  res.json({ user, message: 'User deleted' });
});
exports.user_put = asyncHandler(async (req, res, next) => {
  const result = validationResult(req);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAuthor: req.body.isAuthor,
    _id: req.params.id,
  });
  await User.findByIdAndUpdate(req.params.id, user, {});
  res.json({ user, message: 'User updated' });
});
exports.user_detail = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).exec();
  if (user === null) {
    // No results.
    const err = new Error('User not found');
    err.status = 404;
    return next(err);
  }
  res.json({ user, message: 'User detail' });
});
exports.user_list = asyncHandler(async (req, res, next) => {
  const allUser = await User.find().exec();
  res.json({ allUser, message: 'All users' });
});
exports.user_login = asyncHandler(async (req, res, next) => {
  res.json({ login: 'This is the login POST' });
});
