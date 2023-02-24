import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import {useState, ChangeEvent} from "react";
import { submitComment } from "../api";
import InitialCommentObj from "../objects/InitialCommentObj";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CommentProps {
    postId: string;
}


const AddComment = (props: CommentProps) => {
    const navigate = useNavigate();
    const userLoggedIn = useSelector((state:RootState) => {
        return (state.user.loggedIn);
    })
    const userToken = useSelector((state:RootState) => {
        return (state.user.token);
    })
    const username = useSelector((state:RootState) => {
        return (state.user.username);
    })
    const [commentText, setCommentText] = useState("default comment text");
    const handleCommentChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(ev.target.value);
    }
    const handleSubmit = async () => {
        const commentObj: InitialCommentObj = {
            author: username,
            body: commentText
        }
        const res = await submitComment(userToken || "", commentObj, props.postId);
        console.log(res);
        //return res;
        //todo: we need to refresh the page when the comment is submitted, or else
        //it gets submitted with no visual feedback whatsoever
        return res;
    }
    
    const commentFieldProps = {
        value: commentText,
        onChange: handleCommentChange
    }

        /*<textarea value={commentText} onChange= {handleCommentChange}> */
        /*</textarea>*/
    const loggedInText = 
    <div>
        posting a comment as: {username}
        <TextField inputProps={commentFieldProps} multiline={true}></TextField>
        <Button onClick = {() => handleSubmit()}> post it!</Button>
    </div>
    const notLoggedInText = 
    <div>
        log in if you wanna post a comment, man
    </div>

    return (
        userLoggedIn? loggedInText : notLoggedInText
   ) 
}

export default AddComment;