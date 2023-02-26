import DefaultLayout from "./DefaultLayout";
import {useState, ChangeEvent} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { TextField, Button } from "@mui/material";
import { submitPost } from "../api";
import InitialPostObj from "../objects/InitialPostObj";
import { useNavigate } from "react-router-dom";
import styles from "../styles/createPost.module.css";
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
        onChange: handleTitleChange,
        style: {color: "beige", borderColor: "yellow"}

    }
    const bodyFieldProps = {
        value: postBody,
        onChange: handleBodyChange,
        style: {color: "beige", borderColor: "yellow"}
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
            navigate("/viewPost/"+newPostId);

        }
        else{
            console.log("something went wrong...")
        }
    }
    const textFieldStyles = {
        fieldSet: {borderColor: "beige !important"},
        input: {
            borderColor: "beige"
        }
    }
    const inputLabelStyles = {
        style: {
            color: "beige"
        }
    }
    
    const loggedInText = 
        <div>
            <TextField  
                InputLabelProps={inputLabelStyles} 
                sx = {textFieldStyles} 
                label="post title" 
                inputProps={titleFieldProps}>
            </TextField>
            <TextField 
                InputLabelProps= {inputLabelStyles} 
                sx= {textFieldStyles} 
                label="post body" 
                multiline= {true} 
                inputProps={bodyFieldProps}>
            </TextField>
            <Button sx= {{color:"beige"}} onClick = {() => handleSubmit()}> 
                Create the post!
            </Button>
        </div>
    const notLoggedInText = 
        <div>
            Log in to create your own post
        </div>
    return (
        <DefaultLayout>
            <div className = {styles.default}>
                {userLoggedIn? loggedInText : notLoggedInText}
            </div>
        </DefaultLayout> 
    )



}

export default CreatePost;