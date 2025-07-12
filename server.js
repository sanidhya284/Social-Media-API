import "./env.js";
import express from "express";
import swagger from "swagger-ui-express";
import cors from "cors";
import mongoose from "mongoose";
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";
import { ApplicationError } from "./src/error-handler/applicationError.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";

import apiDocs from "./swagger.json" with { type: "json" };
import userRouter from "./src/features/user/user.routes.js";
import postRouter from "./src/features/post/post.routes.js";
import commentRouter from "./src/features/comment/comment.routes.js";
import likeRouter from "./src/features/like/like.routes.js";
import friendShipRouter from "./src/features/frndship/frndship.routes.js";
import otpRouter from "./src/features/otp/otp.routes.js";
//create server
const server = express();
const port = 4200;

server.use(cors());

server.use(express.json());
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
server.use(loggerMiddleware);

server.get("/", (req, res) => {
	res.redirect("/api-docs");
});

server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);
server.use("/api/comments", commentRouter);
server.use("/api/likes", likeRouter);
server.use("/api/friends", friendShipRouter);
server.use("/api/otp", otpRouter);

server.use((err, req, res, next) => {
	console.log(err);
	if (err instanceof mongoose.Error.ValidationError) {
		return res.status(400).send(err.message);
	}
	if (err instanceof ApplicationError) {
		return res.status(err.code).send(err.message);
	} else {
		res.status(500).send("Something went wrong,please try later");
	}
});
server.use((req, res) => {
	res
		.status(404)
		.send(
			"API not found please check our documentation for more at localhost:****/api-docs"
		);
});
server.listen(port, () => {
	console.log(`server is listening on port ${port}`);
	connectUsingMongoose();
});
