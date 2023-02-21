import {Request, Response} from "express";
import CommentReqObj from "../objects/CommentReqObj"
import CommentObj from "../objects/CommentObj";
import mongoose from "mongoose";
import PostModel from "../models/PostModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.SECRET || "default secret";

export const postComment = async (req: Request, res: Response) => {
    try{
        const reqInfo: CommentReqObj = req.body;
        const token = req.body.token;
        try {
            jwt.verify(token, SECRET);
        }
        catch (err){
            res.status(400).json({message: "couldn't verify jwt"})
        }
        const commentId = new mongoose.Types.ObjectId;
        const commentIdStr = commentId.toString();
        const currentDate = Date().toString().slice(0,10);
        const newComment: CommentObj = {
            author: reqInfo.author,
            body: reqInfo.body,
            dateCreated: currentDate,
            id: commentIdStr
        }
        try{
            //we should also perform a check to make sure we can actually
            //find a post with the id specified in the request body
            

            const new_doc = await PostModel.findOneAndUpdate({_id: reqInfo.postId}, {$push: {comments: newComment}})
            if (new_doc) {
                res.status(200).json({message: "comment posted!", new_doc});
            }
            else{
                res.status(404).json({message: "couldn't find the document"});
            }

        }
        catch{
            res.status(400).json({message: "error while updating database"})
        }
    }
    catch (err){
        console.log(err);
        res.status(400).json({message:"badly formed request"})
    }



}