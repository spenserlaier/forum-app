//import React from "react";
import PostObj from "../objects/PostObj"
import {Link} from "react-router-dom";
import { Card } from "@mui/material";
const CondensedPost = (props: PostObj) => {
    //console.log(props);
    return (
        
        <div>
        <Card variant="outlined">
            <div> this is a forum post </div>
            <div> {props.title}</div>
            <div>  {props.author}</div>
            <div> {props.body} </div>
            <div> {props.dateCreated} </div>
        </Card>
        </div>
        
    )
}

export default CondensedPost;