import mongoose from "mongoose";
import {Request, Response} from "express";
import InitialPostObj from "../objects/InitialPostObj";
export const submitPost = async (req: Request, res: Response) => {
    try{
        //take the initial info, verify the token,
        //and create the post
        const postInformation: InitialPostObj = req.body.postInfo;
        
    }
    catch{
        
    }

}