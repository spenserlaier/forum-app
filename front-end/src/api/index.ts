import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import InitialPostObj from "../objects/InitialPostObj";
import PostObj from "../objects/PostObj";
import InitialCommentObj from "../objects/InitialCommentObj";



const URL = process.env.REACT_APP_BACKEND_SERVER
console.log(URL);
const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_SERVER})
export const getPosts = async () => {
    const posts = await API.get("/posts/getPosts");
    return posts.data;
}
export const getSinglePost = async(postId: string) => {
    try{
        const params = {
            id: postId
        }
        const post = await API.get("/posts/getSinglePost", {params: params});
        return post.data;
    }
    catch (err){
        console.log(err);
    }
}

export const submitPost = async (token : string, postObj: InitialPostObj) => {
    try{
        const reqBody = {
            token: token,
            postInfo: postObj
        }
        const response =await  API.post("/posts/submitPost", reqBody)
        return response; 
    }
    catch (err){
        console.log(err);
    }
}

export const submitComment = async(token: string, commentObj: InitialCommentObj, postId: string) => {
    try{
        //we need token, author, body, and postId
        const reqBody = {
            token: token,
            author: commentObj.author,
            body: commentObj.body,
            postId: postId
        }
        const response = await API.post("/comments/submitComment", reqBody);
        console.log(response);
        return response;
    }
    
    catch(err) {
        console.log(err);
    }
    
}

export const login = async(username: string, password: string) => {
    try{
        const reqBody = {
            username: username,
            password: password
        }
        const response = await API.post("/user/signIn", reqBody)
        return response;
    }
    catch(err) {
        console.log(err);
    }
}

export const createAccount = async(username: string, email: string, password: string) => {
    try{
        //createAccount endpoint expects
        //a req body with username, password, and email fields
        //the route name is user/createAccount
        const accountBody = {
            username: username,
            email: email,
            password: password,
        }
        const response = await API.post("/user/createAccount", accountBody);
        console.log("account created!")
        return response;
    }
    catch (err) {
        console.log(err);
    }
}


