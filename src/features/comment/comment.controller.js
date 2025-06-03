import CommentModel from "./comment.model.js";
export default class CommentController {
    getCommentsByPostId(req, res) {
        const postId = req.params.id;
        const comments = CommentModel.getByPostId(postId);
        res.status(200).send(comments);
    }
    addComment(req, res) {
        const postId = req.params.id;
        const { content } = req.body;
        const newComment = {
            userId: req.user.id,
            postId,
            content,
        };
        const createdComment = CommentModel.add(newComment);
        res.status(201).send(createdComment);
    }
    updateComment(req, res) {
        const commentId = req.params.id;
        const { content } = req.body;
        const updatedComment = CommentModel.update(commentId, { content });
        if (!updatedComment) {
            res.status(404).send("Comment not found");
        } else {
            res.status(200).send(updatedComment);
        }
    }
    deleteComment(req, res) {
        const commentId = req.params.id;
        const deleted = CommentModel.delete(commentId);
        if (!deleted) {
            res.status(404).send("Comment not found");
        } else {
            res.status(200).send({ message: "Comment deleted successfully" });
        }
    }
}
