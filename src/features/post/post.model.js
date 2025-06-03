import UserModel from "../user/user.model.js";
import ApplicationError from "../../error-handler/applicationError.js";
export default class PostModel {
    constructor(id, userId, caption, mediaURL) {
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.mediaURL = mediaURL;
        this.createdAt = new Date();
    }

    static get(id) {
        return posts.find(post => post.id == id);
    }

    static getAll() {
        return posts;
    }

    static add(post) {
        post.id = posts.length + 1;
        post.createdAt = new Date();
        posts.push(post);
        return post;
    }

    static update(id, updateData) {
        const post = posts.find(p => p.id == id);
        if (!post) return null;
        if (updateData.caption !== undefined) post.caption = updateData.caption;
        if (updateData.mediaURL !== undefined) post.mediaURL = updateData.mediaURL;
        return post;
    }

    static delete(id) {
        const index = posts.findIndex(p => p.id == id);
        if (index === -1) return false;
        posts.splice(index, 1);
        return true;
    }
}

// Default posts array
export const posts = [
    new PostModel(1, 1, "Hello world! My first post.", "https://example.com/media/first.jpg"),
    new PostModel(2, 2, "Enjoying the sunshine!", "https://example.com/media/sunshine.jpg"),
    new PostModel(3, 1, "Check out this cool photo.", "https://example.com/media/photo.jpg")
];

