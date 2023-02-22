import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import PostObj from "../objects/PostObj";
import { getPosts } from "../api";

interface PostsState {
    posts: PostObj[];
}
const initialState: PostsState = {
    posts: []
}



const postsSlice = createSlice( {
    name: "posts",
    initialState: initialState,
    reducers: {
        setCurrentPosts(state, action: PayloadAction<PostObj[]>) {
            state.posts = action.payload;
        }
    }
});