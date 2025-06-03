import express from "express";
import fs from 'fs';
import swagger from "swagger-ui-express";
import bodyparser from "body-parser";
import postRouter from "./src/features/post/post.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import commentRouter from "./src/features/comment/comment.routes.js";
import likeRouter from "./src/features/like/like.routes.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";
import cors from "cors";
import logMiddleware from "./src/middlewares/logger.middleware.js";
import fileUploadMiddleware from "./src/middlewares/fileUpload.middleware.js";
import ApplicationError from "./src/error-handler/applicationError.js";

const apiDocs = JSON.parse(fs.readFileSync('./swagger.json', 'utf-8'));

const server = express();
var corsOption = {
    origin: 'http://localhost:5500',
    allowedHeaders: '*'
};

server.use(cors(corsOption));
server.use(bodyparser.json());
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
server.use(logMiddleware);

// User routes (no auth)
server.use('/api/users', userRouter);

// Authenticated routes
server.use('/api/posts', jwtAuth,  postRouter);
server.use('/api/comments', jwtAuth, commentRouter);
server.use('/api/likes', jwtAuth, likeRouter);

server.get('/', (req, res) => {
    res.send("Welcome to the Social Media APIs");
});

server.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof ApplicationError) {
        res.status(err.code).send(err.message);
    } else {
        res.status(500).send("Something went wrong, please try later");
    }
});

server.use((req, res) => {
    res.status(404).send("API not found, Please refer to our documentation at localhost:3200/api-docs");
});

server.listen(3200, () => {
    console.log("Server is listening on port 3200");
});

