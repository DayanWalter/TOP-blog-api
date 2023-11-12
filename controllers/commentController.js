const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.comment_post = asyncHandler(async (req, res, next) => {
  const result = validationResult(req);

  const comment = new Comment({
    text: req.body.text,
    timestamp: new Date().toLocaleString('en-US'),
  });
  if (result.isEmpty()) {
    await comment.save();
  }

  res.json({ comment: 'comment_create_post' });
});

exports.comment_delete = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_delete_delete' });
});

exports.comment_put = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_update_put' });
});
exports.comment_detail = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_detail' });
});
exports.comment_list = asyncHandler(async (req, res, next) => {
  res.json({ comment: 'comment_list' });
});
