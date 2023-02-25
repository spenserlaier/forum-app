//import React from "react";
import PostObj from "../objects/PostObj"
import {Link} from "react-router-dom";
import { Card } from "@mui/material";
import styles from "../styles/condensedPost.module.css";
const CondensedPost = (props: PostObj) => {
    //console.log(props);
    return (
        
        <Card variant="outlined">
            <div className = {styles.condensedPost}>
                <div> this is a forum post </div>
                <div> {props.title}</div>
                <div>  {props.author}</div>
                <div> {props.body} </div>
                <div> {props.dateCreated} </div>


            </div>
        </Card>
        
    )
}

export default CondensedPost;