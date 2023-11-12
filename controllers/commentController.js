const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.comment_post = asyncHandler(async (req, res, next) => {
  // Validate and Sanitize input
  const result = validationResult(req);

  const comment = new Comment({
    text: req.body.text,
    timestamp: new Date().toLocaleString('en-US'),
    user: req.body.user,
  });
  if (result.isEmpty()) {
    await comment.save();
  }

  res.json({ comment, message: 'Comment postet' });
});
exports.comment_delete = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);
  if (comment === null) {
    // No results.
    const err = new Error('Comment not found');
    err.status = 404;
    return next(err);
  }

  res.json({ comment, message: 'Comment deleted' });
});
exports.comment_put = asyncHandler(async (req, res, next) => {
  const result = validationResult(req);

  const comment = new Comment({
    text: req.body.text,
    user: req.body.user,
    _id: req.params.id,
  });
  await Comment.findByIdAndUpdate(req.params.id, comment, {});
  res.json({ comment, message: 'Comment updated' });
});
exports.comment_detail = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id).populate('user').exec();
  if (comment === null) {
    // No results.
    const err = new Error('Comment not found');
    err.status = 404;
    return next(err);
  }
  res.json({ comment, message: 'Comment detail' });
});
exports.comment_list = asyncHandler(async (req, res, next) => {
  const allComments = await Comment.find().populate('user').exec();
  res.json({ allComments, message: 'All comments' });
});
