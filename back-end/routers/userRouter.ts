import express from "express";
import { signIn, createAccount} from "../controllers/user";

const router = express.Router();
router.post("/signin", signIn);
router.post("/createAccount", createAccount);




export default router;