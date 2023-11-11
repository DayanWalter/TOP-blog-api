const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.user_create_get = asyncHandler(async (req, res, next) => {
  res.json({ user: 'user_create_get' });
});
exports.user_create_post = asyncHandler(async (req, res, next) => {
  res.json({ user: 'user_create_post' });
});
exports.user_delete_get = asyncHandler(async (req, res, next) => {
  res.json({ user: 'user_delete_get' });
});
exports.user_delete_delete = asyncHandler(async (req, res, next) => {
  res.json({ user: 'user_delete_delete' });
});
exports.user_update_get = asyncHandler(async (req, res, next) => {
  res.json({ user: 'user_update_get' });
});
exports.user_update_put = asyncHandler(async (req, res, next) => {
  res.json({ user: 'user_update_put' });
});
exports.user_detail = asyncHandler(async (req, res, next) => {
  res.json({ user: 'user_detail' });
});
exports.user_list = asyncHandler(async (req, res, next) => {
  res.json({ user: 'user_list' });
});
