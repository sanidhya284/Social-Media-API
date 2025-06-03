import express from "express";
import LikeController from "./like.controller.js";

const likeController = new LikeController();
const router = express.Router();

// Get all likes for a post
router.get('/:postId', likeController.getLikesByPostId);
// Toggle like/unlike for a post
router.get('/toggle/:postId', likeController.toggleLike);

export default router;

