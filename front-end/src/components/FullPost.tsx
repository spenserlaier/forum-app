import PostObj from "../objects/PostObj";
import CommentObj from "../objects/CommentObj";
import DefaultLayout from "./DefaultLayout";
import AddComment from "./AddComment";
import fakePosts from "../mockData/fakePosts";
import {useParams} from "react-router-dom";
import {useState } from "react";
import { Card } from "@mui/material";

import styles from "../styles/post.module.css"
const FullPost = () => {
    const {postId} = useParams();
    //console.log(postId);
    const matchingPost = fakePosts.find(
        (post) => {
            return (post._id === postId)
        }
    )
    const [currentPost, setCurrentPost] = useState(matchingPost);
    if (currentPost !== undefined){
        const comments = currentPost.comments.map( (comment) => {
            return (
            <div key={comment.id} >
                <Card variant="outlined">
                    <div>
                        This comment was written by: {comment.author}
                    </div>
                    <div>
                        Comment text: {comment.body}
                    </div>
                </Card>
            </div>
            
            )

            
        })
        return (
            
            <DefaultLayout>
                <div>
                    this is where the full post will go
                </div>
                <Card variant="outlined" className={styles.forumPost}>
                    <div>
                        Title: {currentPost.title}
                    </div>
                    <div>
                        Post made by: {currentPost.author}
                    </div>
                    <div>
                        Created: {currentPost.dateCreated}
                    </div>
                </Card>
                <div>
                    <AddComment/>
                </div>
                <div>
                    Comments: {comments}
                </div>
            </DefaultLayout>
        )
    }
    else{
        return(
            <div>
                post not found
            </div>
        )
    }
}
export default FullPost;