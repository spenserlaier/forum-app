import CommentObj from "./CommentObj";
interface PostObj  {
    author: string;
    body: string;
    title: string;
    dateCreated: string;
    id: string;
    comments: CommentObj[];
}
export default PostObj;