
// an interface that represents the data we expect to receive
// before creating a post document in the database
interface InitialPostObj  {
    author: string;
    body: string;
    title: string;
    //dateCreated: string; -> we'll record this when the post is created
    //id: string; -> the database will handle the id 
    //comments: CommentObj[]; -> no comments will exist when the post is first created
}
export default InitialPostObj;