const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.post_post = asyncHandler(async (req, res, next) => {
  res.json({ post: 'post_create_post' });
});

exports.post_delete = asyncHandler(async (req, res, next) => {
  res.json({ post: 'post_delete_delete' });
});

exports.post_put = asyncHandler(async (req, res, next) => {
  res.json({ post: 'post_update_put' });
});
exports.post_detail = asyncHandler(async (req, res, next) => {
  res.json({ post: 'post_detail' });
});
exports.post_list = asyncHandler(async (req, res, next) => {
  res.json({ post: 'post_list' });
});
