const express = require('express');
const router = express.Router();

const comment_controller = require('../controllers/commentController');
const post_controller = require('../controllers/postController');
const user_controller = require('../controllers/userController');

// GET home page
router.get('/api', function (req, res, next) {
  res.json({ start: 'This is the GET index' });
});
// POST home page
router.post('/api', function (req, res, next) {
  res.json({ start: 'This is the POST index' });
});

/// POST ROUTES ///

// GET request for creating Post
router.get('/api/post/create', post_controller.post_create_get);
// POST request for creating Post
router.post('/api/post/create', post_controller.post_create_post);

// GET request for delete Post
router.get('api/post/:id/delete', post_controller.post_delete_get);
// POST request for delete Post
router.post('api/post/:id/delete', post_controller.post_delete_post);

// GET request for update Post
router.get('api/post/:id/update', post_controller.post_update_get);
// POST request for update Post
router.post('api/post/:id/update', post_controller.post_update_post);

// GET request for one Post
router.get('api/post/:id', post_controller.post_detail);

// Get request for list of all Posts
router.get('api/posts', post_controller.post_list);

/// COMMENT ROUTES ///

// GET request for creating Comment
router.get('/api/comment/create', comment_controller.comment_create_get);
// POST request for creating Comment
router.post('/api/comment/create', comment_controller.comment_create_post);

// GET request for delete Comment
router.get('api/comment/:id/delete', comment_controller.comment_delete_get);
// POST request for delete Comment
router.post('api/comment/:id/delete', comment_controller.comment_delete_post);

// GET request for update Comment
router.get('api/comment/:id/update', comment_controller.comment_update_get);
// POST request for update Comment
router.post('api/comment/:id/update', comment_controller.comment_update_post);

// GET request for one Comment
router.get('api/comment/:id', comment_controller.comment_detail);

// Get request for list of all Comments
router.get('api/comments', comment_controller.comment_list);

/// USER ROUTES ///

// GET request for creating User
router.get('/api/user/create', user_controller.user_create_get);
// POST request for creating User
router.post('/api/user/create', user_controller.user_create_post);

// GET request for delete User
router.get('api/user/:id/delete', user_controller.user_delete_get);
// POST request for delete User
router.post('api/user/:id/delete', user_controller.user_delete_post);

// GET request for update User
router.get('api/user/:id/update', user_controller.user_update_get);
// POST request for update User
router.post('api/user/:id/update', user_controller.user_update_post);

// GET request for one User
router.get('api/user/:id', user_controller.user_detail);

// Get request for list of all Users
router.get('api/users', user_controller.user_list);
module.exports = router;
