import express from "express";
import PostController from "./post.controller.js";
import { uploads } from "../../middlewares/fileUpload.middleware.js";

const postController = new PostController();
const router = express.Router();

// Get all posts
router.get('/all', postController.getAllPosts);
// Get a specific post by ID
router.get('/:id', postController.getPostById);
// Create a new post (with media upload)
router.post('/', uploads.single('media'), postController.createPost);
// Update a post (with media upload)
router.put('/:id', uploads.single('media'), postController.updatePost);
// Delete a post
router.delete('/:id', postController.deletePost);

export default router;
