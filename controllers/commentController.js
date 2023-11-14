const Comment = require('../models/comment');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.comment_post = asyncHandler(async (req, res, next) => {
  // Validate and Sanitize input
  const result = validationResult(req);

  const comment = new Comment({
    user: req.body.user,
    text: req.body.text,
    timestamp: new Date().toLocaleString('en-US'),
    post: req.params.postid,
  });
  if (result.isEmpty()) {
    await comment.save();
  }

  res.json({ comment, message: 'Comment postet' });
});
exports.comment_delete = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.commentid);
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
    user: req.body.user,
    text: req.body.text,
    _id: req.params.commentid,
  });
  await Comment.findByIdAndUpdate(req.params.commentid, comment, {});
  res.json({ comment, message: 'Comment updated' });
});
exports.comment_detail = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentid)
    .populate('post')
    .exec();
  if (comment === null) {
    // No results.
    const err = new Error('Comment not found');
    err.status = 404;
    return next(err);
  }
  res.json({ comment, message: 'Comment detail' });
});
exports.comment_list = asyncHandler(async (req, res, next) => {
  const allComments = await Comment.find().populate('post').exec();
  res.json({ allComments, message: 'All comments' });
});
