import DefaultLayout from "./DefaultLayout";
import {useState, ChangeEvent} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { TextField, Button } from "@mui/material";
const CreatePost = () => {
    const [postTitle, setPostTitle] = useState("default post title");
    const [postBody, setPostBody] = useState("default post body");
    const userLoggedIn = useSelector( (state : RootState) => {
        return (state.user.loggedIn)
    })
    const handleTitleChange = (ev:ChangeEvent<HTMLInputElement>) => {
        setPostTitle(ev.target.value);
    }
    const handleBodyChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        setPostBody(ev.target.value);
    }
    const titleFieldProps = {
        value: postTitle,
        onChange: handleTitleChange
    }
    const bodyFieldProps = {
        value: postBody,
        onChange: handleBodyChange
    }
    
    const loggedInText = 
        <div>
            <TextField label="post title" inputProps={titleFieldProps}></TextField>
            <TextField label="post body" multiline= {true} inputProps={bodyFieldProps}></TextField>
            <Button> Create the post!</Button>
        </div>
    const notLoggedInText = 
        <div>
            Log in if you wanna make a post, man!
        </div>
    return (
        <DefaultLayout>
            {userLoggedIn? loggedInText : notLoggedInText}
        </DefaultLayout> 
    )



}

export default CreatePost;