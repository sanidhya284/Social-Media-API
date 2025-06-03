import LikeModel from "./like.model.js";
export default class LikeController {
    getLikesByPostId(req, res) {
        const postId = req.params.postId;
        const likes = LikeModel.getByPostId(postId);
        res.status(200).send(likes);
    }
    toggleLike(req, res) {
        const postId = req.params.postId;
        const userId = req.user.id;
        const result = LikeModel.toggleLike(userId, postId);
        res.status(200).send(result);
    }
}
