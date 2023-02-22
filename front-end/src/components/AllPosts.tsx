import PostObj from "../objects/PostObj";
import CondensedPost from "./CondensedPost";
import {useState, useEffect} from "react";
import DefaultLayout from "./DefaultLayout";
import {Link} from "react-router-dom";
import fakePosts from "../mockData/fakePosts";
import { getPosts } from "../api";

//import axios from "axios";


const AllPosts = () => {
    let initialState: PostObj[] = [];
    //const [currentPosts, setCurrentPosts] = useState(fakePosts);
    const [currentPosts, setCurrentPosts] = useState(fakePosts);
    useEffect( () => {
        const updatePosts = async () => {
            try{
                const posts = await getPosts();
                console.log(posts);
                setCurrentPosts(posts);
            }
            catch(err){
                console.log(err);
            }
        }
        updatePosts();
    }, [])
    //console.log(fakePosts);
    const postElements = currentPosts.map((post) => {
        const postId = post._id;
        const url = "/viewPost/" + postId;
        return  (<Link to={url} key={postId}>  <CondensedPost {...post} /> </Link>
        )
        }
    )
    //console.log(postElements);
    return (
        <DefaultLayout>
            {postElements}
        </DefaultLayout>
    )
}

export default AllPosts;