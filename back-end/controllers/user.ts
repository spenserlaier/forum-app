import UserModel from "../models/UserModel";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Request, Response} from "express"

dotenv.config();
const SECRET:string = process.env.SECRET || "defaultsecret";


<<<<<<< HEAD

=======
>>>>>>> 3fc8768 (combining front and backend into one git repo)
export const signIn = async (req: Request, res: Response) => {
    //a post request that takes a req with username and pass,
    //checks for account with the username,
    //and checks that (hashed) password is accurate
    
    const loginData = req.body;
    try {
        const attemptedUser =  await UserModel.findOne({
            username: loginData.username,
        })
<<<<<<< HEAD
        if (attemptedUser?.password && attemptedUser?.username && attemptedUser?.email) {
            //ie we've found a non-null set of credentials
=======
        if (attemptedUser?.password) {
            //if password exists (ie we've found a successful user)
>>>>>>> 3fc8768 (combining front and backend into one git repo)
            const passwordsMatch = await bcrypt.compare(loginData.password, attemptedUser.password);
            if (passwordsMatch) {
                const token = jwt.sign(
                    {username: attemptedUser.username,
                     email: attemptedUser.email}, 
                    SECRET
                    )
                res.status(200).json({
<<<<<<< HEAD
                    //will probably remove the fields below eventually, since
                    //they'll be included in the token 
                    success: true,
                    username: attemptedUser.username, 
                    email: attemptedUser.email,
                    token: token,
                })
            }
            else {
               res.status(400).json({
                success: false,
                message: "bad password"
            });
            }
        }
        else {
            res.status(404).json({
                success: false,
                message: "couldn't find user with that username"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong (unknown error)"
        })
=======
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
>>>>>>> 3fc8768 (combining front and backend into one git repo)
        console.log(err);
    }
}

export const createAccount = async (req: Request, res: Response) => {
    const accountData = req.body;
    try{
<<<<<<< HEAD
        if (accountData?.username) {
            console.log(accountData);
            console.log(UserModel.countDocuments());
            //note: find method returns a query object, which then needs
            //to be executed
            const alreadyExists = await UserModel.findOne({username: accountData.username}).exec();
            if (alreadyExists === null) {
                const hashedPassword = await bcrypt.hash(accountData.password, 12);
                await UserModel.create({
                    username: accountData.username,
                    password: hashedPassword,
                    email: accountData.email,
                })
                res.status(200).json({success: true, message: "account created!"});
            }
            else{
                res.status(400).json({message: "username already exists"});
            }
        }
        else {
            res.status(400).json({message: "badly formed request (null data)"})
=======
        if (accountData != null) {
            await UserModel.create({
                username: accountData.username,
                password: accountData.password,
                email: accountData.email,
            })
        }
        else {
            res.json({message: "badly formed request (null data)"})
>>>>>>> 3fc8768 (combining front and backend into one git repo)
        }
        
    }
    catch (err){
<<<<<<< HEAD
        console.log(req.body);
=======
>>>>>>> 3fc8768 (combining front and backend into one git repo)
        res.status(500).json({message: "unknown error"})
    }
   
}