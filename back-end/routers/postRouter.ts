import express from "express";
import { submitPost } from "../controllers/post";

const postRouter = express.Router();

postRouter.post("/submitPost", submitPost);

export default postRouter;

