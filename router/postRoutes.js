const express = require('express');

const postController = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, postController.createPost).get(protect, postController.getAllPosts);

router
  .route('/:id')
  .get(protect, postController.getOnePost)
  .patch(protect, postController.updatePost)
  .delete(protect, postController.deletePost);

module.exports = router;
