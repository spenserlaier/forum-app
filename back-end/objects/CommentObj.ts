interface CommentObj {
    author: string;
    body: string;
    //we keep the id for this interface because this is the interface we'll use
    //to identify comments in an existing post (ie, the comment has already
    //been posted, so it has an id)
    id: string;
}

export default CommentObj;