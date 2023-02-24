import express from "express";
import { postComment } from "../controllers/comment";

const router = express.Router();
// ie comments/submitComment
router.post("/submitComment", postComment)

export default router;

