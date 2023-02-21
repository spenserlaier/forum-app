import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import {useState, ChangeEvent} from "react";


const AddComment = () => {
    const userLoggedIn = useSelector((state:RootState) => {
        return (state.user.loggedIn);
    })
    const username = useSelector((state:RootState) => {
        return (state.user.username);
    })
    const [commentText, setCommentText] = useState("default comment text");
    const handleCommentChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(ev.target.value);
    }

    const loggedInText = 
    <div>
        posting a comment as: {username}
        <textarea value={commentText} onChange= {handleCommentChange}>
        </textarea>
        <button> post it!</button>
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