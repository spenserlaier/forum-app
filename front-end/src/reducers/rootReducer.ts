//import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import postsSlice from "./postsSlice";

import {UserState} from "./userSlice";
import { PostsState } from "./postsSlice";
import {useSelector} from "react-redux";
const userReducer = userSlice.reducer;
const postsReducer = postsSlice.reducer;



export interface RootState {
    user: UserState;
    posts: PostsState;
}

const reducer = {
    user: userReducer,
    posts: postsReducer,

}

export default reducer;