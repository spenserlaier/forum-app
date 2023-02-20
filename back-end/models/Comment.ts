import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema( {
    author: String,
    body: String,
    dateCreated: String
})