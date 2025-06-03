import UserModel from "../user/user.model.js";
import ApplicationError from "../../error-handler/applicationError.js";
export default class CommentModel {
    constructor(id, userId, postId, content) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
        this.createdAt = new Date();
    }

    static getByPostId(postId) {
        return comments.filter(comment => comment.postId == postId);
    }

    static add(comment) {
        comment.id = comments.length + 1;
        comment.createdAt = new Date();
        comments.push(comment);
        return comment;
    }

    static update(id, updateData) {
        const comment = comments.find(c => c.id == id);
        if (!comment) return null;
        if (updateData.content !== undefined) comment.content = updateData.content;
        return comment;
    }

    static delete(id) {
        const index = comments.findIndex(c => c.id == id);
        if (index === -1) return false;
        comments.splice(index, 1);
        return true;
    }
}

// Default comments array
export const comments = [
    new CommentModel(1, 2, 1, "Nice post!"),
    new CommentModel(2, 1, 2, "Thanks for sharing!"),
    new CommentModel(3, 3, 1, "Great photo!")
];

