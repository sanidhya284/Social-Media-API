import UserModel from "../user/user.model.js";
import ApplicationError from "../../error-handler/applicationError.js";
export default class LikeModel {
    constructor(id, userId, postId) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }

    static getByPostId(postId) {
        return likes.filter(like => like.postId == postId);
    }

    static toggleLike(userId, postId) {
        const existing = likes.find(like => like.userId == userId && like.postId == postId);
        if (existing) {
            const index = likes.indexOf(existing);
            likes.splice(index, 1);
            return { liked: false, message: "Like removed" };
        } else {
            const newLike = new LikeModel(likes.length + 1, userId, postId);
            likes.push(newLike);
            return { liked: true, message: "Post liked" };
        }
    }
}

// Default likes array
export const likes = [
    new LikeModel(1, 1, 1),
    new LikeModel(2, 2, 1),
    new LikeModel(3, 3, 2)
];

