import express from "express";
import { getSinglePost, submitPost } from "../controllers/post";
import { getPosts } from "../controllers/post";

const postRouter = express.Router();

postRouter.post("/submitPost", submitPost);
postRouter.get("/getPosts", getPosts);
postRouter.get("/getSinglePost", getSinglePost)

export default postRouter;

