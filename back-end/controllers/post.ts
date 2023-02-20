import mongoose from "mongoose";
import {Request, Response} from "express";
import InitialPostObj from "../objects/InitialPostObj";
import PostModel from "../models/PostModel";
import jwt, { Jwt } from "jsonwebtoken";
import dotenv from "dotenv";
import { JwtPayload } from "jsonwebtoken";
export const submitPost = async (req: Request, res: Response) => {
    dotenv.config();
    const SECRET = process.env.SECRET || "random secret";
    try{
        //take the initial info, verify the token,
        //and create the post
        //we store the post info in its own field, and the token in its own field as well
        const postInformation: InitialPostObj = req.body.postInfo;
        const token = req.body.token;
        const currentDate = Date().toString().slice(0,10);
        let verifyToken: JwtPayload = {};
        try{
            verifyToken  = (jwt.verify(token, SECRET)) as JwtPayload;
        }
        catch (err){
            res.status(400).json({message: "couldn't verify jwt"})
        }
        //const verifyToken  :JwtPayload= (jwt.verify(token, SECRET)) 
        //verifyToken.
        if (verifyToken?.username){
            const newPost = await PostModel.create({
                title: postInformation.title,
                body: postInformation.body,
                //author: verifyToken.author,
                author: postInformation.author,
                dateCreated: currentDate,
            })
            console.log(newPost);
            res.status(200).json({message: "post successfully created"});
        }
        else{
            res.status(400).json({message: "couldn't verify identity of user"});
        }
    }
    catch (err){
        console.log(err);
        res.status(500).json({message: "unknown error occurred"});
    }

}