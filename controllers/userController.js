const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');
const passport = require('passport');

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
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  //This lookup would normally be done using a database
  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      //the password compare would normally be done using bcrypt.
      const opts = {};
      //token expires in 20sec
      const secret = 'SECRET_KEY'; //normally stored in process.env.secret
      const token = jwt.sign({ username }, secret, opts);
      return res.status(200).json({
        message: 'Auth Passed',
        token,
      });
    }
  }
  return res.status(401).json({ message: 'Auth Failed' });
});
