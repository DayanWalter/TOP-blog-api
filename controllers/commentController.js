const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.comment_create_get = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_create_get' });
});
exports.comment_create_post = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_create_post' });
});
exports.comment_delete_get = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_delete_get' });
});
exports.comment_delete_delete = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_delete_delete' });
});
exports.comment_update_get = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_update_get' });
});
exports.comment_update_put = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_update_put' });
});
exports.comment_detail = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_detail' });
});
exports.comment_list = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_list' });
});
