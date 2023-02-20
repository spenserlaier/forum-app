import mongoose from "mongoose";
import {commentSchema} from "./Comment";

const  PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    dateCreated: String,
    //current decision is to just keep comments in the same doc,
    //but they could probably be moved to their own separate doc
    //(right now, app isn't big enough to worry about that).
    comments: [commentSchema]


    
}) 

const PostModel = mongoose.model("post", PostSchema)
export default PostModel;