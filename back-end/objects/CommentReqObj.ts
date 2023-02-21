import mongoose from "mongoose";
interface CommentReqBody {

    author: string;
    body: string;
    //there's no id field for the comment req interface because it 
    //represents a comment that hasn't been posted yet (ie,
    //no date information, and no database id)
    //

    //for now, we include a postId alongside the other fields.
    //we may want to separate comment info from post info in the future
    postId: string;


}

export default CommentReqBody;