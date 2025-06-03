import express from "express";
import CommentController from "./comment.controller.js";

const commentController = new CommentController();
const router = express.Router();

// Get all comments for a post
router.get('/:id', commentController.getCommentsByPostId);
// Add a comment to a post
router.post('/:id', commentController.addComment);
// Update a comment
router.put('/:id', commentController.updateComment);
// Delete a comment
router.delete('/:id', commentController.deleteComment);

export default router;

