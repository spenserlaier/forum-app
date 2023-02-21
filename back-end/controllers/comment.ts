import {Request, Response} from "express";
import CommentReqBody from "../objects/CommentReqObj"
import CommentObj from "../objects/CommentObj";
import mongoose from "mongoose";
import PostModel from "../models/PostModel";

export const postComment = async (req: Request, res: Response) => {
    try{
        const reqInfo: CommentReqBody = req.body;
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
            await PostModel.updateOne({id: reqInfo.postId}, {$push: {comments: newComment}})
            res.status(200).json({message: "comment posted!"});
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