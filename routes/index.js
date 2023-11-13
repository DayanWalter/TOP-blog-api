const express = require('express');
const router = express.Router();

const comment_controller = require('../controllers/commentController');
const post_controller = require('../controllers/postController');
const user_controller = require('../controllers/userController');

const passport = require('passport');
const protectedRoute = passport.authenticate('jwt', { session: false });

// GET home page
router.get('/api', function (req, res, next) {
  res.json({ start: 'This is the GET index' });
});
// POST home page
router.post('/api', function (req, res, next) {
  res.json({ start: 'This is the POST index' });
});

/// COMMENT ROUTES ///

// POST request for creating Comment
router.post('/api/comment/create', comment_controller.comment_post);
// DELETE request for delete Comment
router.delete(
  '/api/comment/:id/delete',
  protectedRoute,
  comment_controller.comment_delete
);
// PUT request for update Comment
router.put(
  '/api/comment/:id/update',
  protectedRoute,
  comment_controller.comment_put
);
// GET request for one Comment
router.get(
  '/api/comment/:id',
  protectedRoute,
  comment_controller.comment_detail
);
// GET request for list of all Comments
router.get('/api/comments', protectedRoute, comment_controller.comment_list);

/// POST ROUTES ///

// POST request for creating Post
router.post('/api/post/create', protectedRoute, post_controller.post_post);
// DELETE request for delete Post
router.delete(
  '/api/post/:id/delete',
  protectedRoute,
  post_controller.post_delete
);
// PUT request for update Post
router.put('/api/post/:id/update', protectedRoute, post_controller.post_put);
// GET request for one Post
router.get('/api/post/:id', protectedRoute, post_controller.post_detail);
// Get request for list of all Posts
router.get('/api/posts', protectedRoute, post_controller.post_list);

/// USER ROUTES ///

// POST request for creating User
router.post('/api/user/create', user_controller.user_post);
// DELETE request for delete User
router.delete(
  '/api/user/:id/delete',
  protectedRoute,
  user_controller.user_delete
);
// PUT request for update User
router.put('/api/user/:id/update', protectedRoute, user_controller.user_put);
// GET request for one User
router.get('/api/user/:id', protectedRoute, user_controller.user_detail);
// Get request for list of all Users
router.get('/api/users', protectedRoute, user_controller.user_list);

// POST request for User Login
router.post('/api/user/login', user_controller.user_login);

module.exports = router;
