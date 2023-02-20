import UserModel from "../models/UserModel";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Request, Response} from "express"

dotenv.config();
const SECRET:string = process.env.SECRET || "defaultsecret";


export const signIn = async (req: Request, res: Response) => {
    //a post request that takes a req with username and pass,
    //checks for account with the username,
    //and checks that (hashed) password is accurate
    
    const loginData = req.body;
    try {
        const attemptedUser =  await UserModel.findOne({
            username: loginData.username,
        })
        if (attemptedUser?.password) {
            //if password exists (ie we've found a successful user)
            const passwordsMatch = await bcrypt.compare(loginData.password, attemptedUser.password);
            if (passwordsMatch) {
                const token = jwt.sign(
                    {username: attemptedUser.username,
                     email: attemptedUser.email}, 
                    SECRET
                    )
                res.status(200).json({
                    username: attemptedUser.username, 
                    email: attemptedUser.email
                })
            }
            else {
               res.status(400).json({message: "bad password"});
            }
        }
        else {
            res.status(404).json({message: "couldn't find user with that username"})
        }
    }
    catch (err) {
        res.status(500).json({message: "something went wrong (unknown error)"})
        console.log(err);
    }
}

export const createAccount = async (req: Request, res: Response) => {
    const accountData = req.body;
    try{
        if (accountData != null) {
            await UserModel.create({
                username: accountData.username,
                password: accountData.password,
                email: accountData.email,
            })
        }
        else {
            res.json({message: "badly formed request (null data)"})
        }
        
    }
    catch (err){
        res.status(500).json({message: "unknown error"})
    }
   
}