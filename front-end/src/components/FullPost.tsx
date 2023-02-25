import PostObj from "../objects/PostObj";
import CommentObj from "../objects/CommentObj";
import DefaultLayout from "./DefaultLayout";
import AddComment from "./AddComment";
import fakePosts from "../mockData/fakePosts";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { Card } from "@mui/material";
import { getSinglePost} from "../api";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";

import styles from "../styles/post.module.css"
const FullPost = () => {
    const {postId} = useParams();
    const requireRefresh = useSelector( (state: RootState) => {
        return state.posts.requireRefresh;
    })
    console.log(postId);
    const matchingPost = fakePosts.find(
        (post) => {
            return (post._id === postId)
        }
    )
    const [currentPost, setCurrentPost] = useState(matchingPost);
    useEffect( () => {
        const initializePost = async () => {
            try{
                const post = await getSinglePost(postId || "");
                console.log(post);
                setCurrentPost(post);
            }
            catch(err) {
                console.log(err);
            }
        }
        initializePost();

    }, [requireRefresh])
    if (currentPost !== undefined){
        const comments = currentPost.comments.map( (comment) => {
            return (
            <div key={comment._id}  >
                <Card variant="outlined">
                    <div className= {styles.comment}>
                        <div>
                            This comment was written by: {comment.author}
                        </div>
                        <div>
                            Comment text: {comment.body}
                        </div>
                    </div>
                </Card>
            </div>
            
            )

            
        })
        return (
            
            <DefaultLayout  >
                <div className = {styles.default}>
                <Card variant="outlined" className={styles.forumPost}>
                    <div className= {styles.forumPost}>
                        <div>
                            Title: {currentPost.title}
                        </div>
                        <div>
                            Post made by: {currentPost.author}
                        </div>
                        <div>
                            Created: {currentPost.dateCreated}
                        </div>
                    </div>
                </Card>
                <div>
                    <AddComment postId = {postId || ""}/>
                </div>
                <div>
                    Comments: {comments}
                </div>
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