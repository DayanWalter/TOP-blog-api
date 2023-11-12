const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

const { body, validationResult } = require('express-validator');

const asyncHandler = require('express-async-handler');

exports.post_post = asyncHandler(async (req, res, next) => {
  const result = validationResult(req);

  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    timestamp: new Date().toLocaleString('en-US'),
    user: req.body.user,
    visible: req.body.visible,
  });
  if (result.isEmpty()) {
    await post.save();
  }

  res.json({ post });
});
exports.post_delete = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.id);

  res.json({ message: 'Post deleted' });
});

exports.post_put = asyncHandler(async (req, res, next) => {
  const result = validationResult(req);

  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    visible: req.body.visible,
    _id: req.params.id,
  });
  await Post.findByIdAndUpdate(req.params.id, post, {});

  res.json({ post });
});
exports.post_detail = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate('user').exec();
  if (post === null) {
    // No results.
    const err = new Error('Post not found');
    err.status = 404;
    return next(err);
  }
  res.json({ post });
});
exports.post_list = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find().populate('user').exec();

  res.json({ allPosts });
});
