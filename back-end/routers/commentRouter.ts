import express from "express";
import { postComment } from "../controllers/comment";

const router = express.Router();
router.post("/submitComment", postComment)


export default router;

