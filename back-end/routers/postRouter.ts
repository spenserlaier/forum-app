import express from "express";
import { submitPost } from "../controllers/post";
import { getPosts } from "../controllers/post";

const postRouter = express.Router();

postRouter.post("/submitPost", submitPost);
postRouter.get("/getPosts", getPosts);

export default postRouter;

