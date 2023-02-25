import DefaultLayout from "./DefaultLayout";
import {useState, ChangeEvent} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { TextField, Button } from "@mui/material";
import { submitPost } from "../api";
import InitialPostObj from "../objects/InitialPostObj";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
    const [postTitle, setPostTitle] = useState("default post title");
    const [postBody, setPostBody] = useState("default post body");
    const [successfulSubmission, setSuccessfulSubmission] = useState(false);
    const navigate = useNavigate();
    const userLoggedIn = useSelector( (state : RootState) => {
        return (state.user.loggedIn)
    })
    const userToken = useSelector ( (state:RootState) => {
        return state.user.token;
    })
    const username = useSelector ( (state: RootState) => {
        return state.user.username;
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
    const handleSubmit = async () => {
        //the backend expects an InitialPostObj,
        //which contains the fields author, body, and title stored in a postInfo object
        //it also expects a token stored in a "token" field, for verification
        //todo: handle data validation (non-empty, alphanumeric inputs)
        console.log(username);
        const userObject:InitialPostObj = {
            author: username,
            title: postTitle,
            body: postBody,
        }
        const res = await submitPost(userToken || "", userObject)
        if (res?.data.success === true) {
            setSuccessfulSubmission(true);
            console.log("post successfully created")
            console.log(res.data);
            const newPostId = res.data.post._id;
            //navigate("/posts/viewPost/"+newPostId);
            navigate("/viewPost/"+newPostId);

        }
        else{
            console.log("something went wrong...")
        }
    }
    
    const loggedInText = 
        <div>
            <TextField label="post title" inputProps={titleFieldProps}></TextField>
            <TextField label="post body" multiline= {true} inputProps={bodyFieldProps}></TextField>
            <Button onClick = {() => handleSubmit()}> Create the post!</Button>
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