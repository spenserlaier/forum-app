import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import PostObj from "../objects/PostObj";
import { getPosts } from "../api";

export interface PostsState {
    posts: PostObj[];
    requireRefresh: boolean;
}
const initialState: PostsState = {
    posts: [],
    requireRefresh: false
}



const postsSlice = createSlice( {
    name: "posts",
    initialState: initialState,
    reducers: {
        setCurrentPosts(state, action: PayloadAction<PostObj[]>) {
            state.posts = action.payload;
        },
        setRequireRefresh( state, action: PayloadAction<boolean>) {
            state.requireRefresh = action.payload;
        }
    }
});
export default postsSlice;