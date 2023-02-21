import PostObj from "../objects/PostObj";
import CondensedPost from "./CondensedPost";
import {useState, useEffect} from "react";
import DefaultLayout from "./DefaultLayout";
import {Link} from "react-router-dom";
import fakePosts from "../mockData/fakePosts";


const testPost: PostObj = {
    author:"bobjones",
    title:"samjones",
    dateCreated:"today",
    body:"this is a post",
    id:"5",
    comments:[],
}
const AllPosts = (props:any) => {
    let initialState: PostObj[] = [];
    const [currentPosts, setCurrentPosts] = useState(fakePosts);
    //console.log(fakePosts);
    useEffect( () => {
        //const getPosts = async () => {
        const getPosts = () => {
            //return [testPost]; 
            setCurrentPosts(fakePosts);
        }
        getPosts();
    }, [])
    const postElements = currentPosts.map((post) => {
        const postId = post.id;
        const url = "/viewPost/" + postId;
        return  (<Link to={url} key={post.id}>  <CondensedPost {...post} /> </Link>
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