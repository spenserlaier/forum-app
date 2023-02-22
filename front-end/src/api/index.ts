import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import InitialPostObj from "../objects/InitialPostObj";
import PostObj from "../objects/PostObj";



const URL = process.env.REACT_APP_BACKEND_SERVER
console.log(URL);
const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_SERVER})
export const getPosts = async () => {
    const posts = await API.get("posts/getPosts");
    return posts.data;
}
export const getSinglePost = async(postId: string) => {
    try{
        const params = {
            id: postId
        }
        const post = await API.get("posts/getSinglePost", {params: params});
        return post.data;
    }
    catch (err){
        console.log(err);
    }
}

export const submitPost = (token : string, postObj: InitialPostObj) => {
    const reqBody = {
        token: token,
        postInfo: postObj
    }
    return API.post("/posts/submitPost", reqBody) 
}


