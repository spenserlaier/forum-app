import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { useState, ChangeEvent } from "react";
import { submitComment } from "../api";
import InitialCommentObj from "../objects/InitialCommentObj";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import postsSlice from "../reducers/postsSlice";
import store from "../store/store";

interface CommentProps {
  postId: string;
}

const AddComment = (props: CommentProps) => {
  const requireRefresh = useSelector((state: RootState) => {
    return state.posts.requireRefresh;
  });
  const userLoggedIn = useSelector((state: RootState) => {
    return state.user.loggedIn;
  });
  const userToken = useSelector((state: RootState) => {
    return state.user.token;
  });
  const username = useSelector((state: RootState) => {
    return state.user.username;
  });
  const [commentText, setCommentText] = useState("default comment text");
  const handleCommentChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(ev.target.value);
  };
  const handleSubmit = async () => {
    const commentObj: InitialCommentObj = {
      author: username,
      body: commentText,
    };
    const res = await submitComment(userToken || "", commentObj, props.postId);
    console.log(res);
    //this doesn't feel like a great solution, but i'm not sure what the
    //alternatives are--currently the fullpost component uses an effect that refreshes
    //the data when requireRefresh changes
    store.dispatch(postsSlice.actions.setRequireRefresh(!requireRefresh));

    return res;
  };

  const commentFieldProps = {
    value: commentText,
    onChange: handleCommentChange,
    style: { color: "beige", borderColor: "yellow" },
  };
  const commentStyles = {
    fieldSet: { borderColor: "beige !important" },
    input: {
      borderColor: "beige",
    },
  };

  const loggedInText = (
    <div>
      posting a comment as: {username}
      <TextField
        inputProps={commentFieldProps}
        multiline={true}
        sx={commentStyles}
      ></TextField>
      <Button onClick={() => handleSubmit()}> post it!</Button>
    </div>
  );
  const notLoggedInText = <div>log in if you wanna post a comment, man</div>;

  return userLoggedIn ? loggedInText : notLoggedInText;
};

export default AddComment;
