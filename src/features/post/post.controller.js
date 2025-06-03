import PostModel from "./post.model.js";
export default class PostController {
    getAllPosts(req, res) {
        const posts = PostModel.getAll();
        res.status(200).send(posts);
    }
    createPost(req, res) {
        const { caption } = req.body;
        const newPost = {
            userId: req.user.id,
            caption,
            mediaURL: req.file ? req.file.filename : null,
        };
        const createdRecord = PostModel.add(newPost);
        res.status(201).send(createdRecord);
    }
    getPostById(req, res) {
        const id = req.params.id;
        const post = PostModel.get(id);
        if (!post) {
            res.status(404).send("Post not found");
        } else {
            res.status(200).send(post);
        }
    }
    updatePost(req, res) {
        const id = req.params.id;
        const { caption } = req.body;
        const updateData = {
            caption,
            mediaURL: req.file ? req.file.filename : undefined,
        };
        const updatedPost = PostModel.update(id, updateData);
        if (!updatedPost) {
            res.status(404).send("Post not found");
        } else {
            res.status(200).send(updatedPost);
        }
    }
    deletePost(req, res) {
        const id = req.params.id;
        const deleted = PostModel.delete(id);
        if (!deleted) {
            res.status(404).send("Post not found");
        } else {
            res.status(200).send({ message: "Post deleted successfully" });
        }
    }
}
