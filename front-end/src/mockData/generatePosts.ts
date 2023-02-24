import {faker} from "@faker-js/faker";
import PostObj from "../objects/PostObj";
import CommentObj from "../objects/CommentObj";
const generatePosts = (numPosts: number):PostObj[] => {
    let outputArr: PostObj[] = [];
    let commentsArr: CommentObj[] = [];
    let numComments = Math.floor(Math.random()*5);
    for (let a = 0; a< numPosts; a++) {
        const postTitle = faker.animal.fish();
        const postAuthor = faker.name.fullName();
        const postDate = faker.date.weekday();
        const postBody = faker.animal.dog();
        const postId = faker.helpers.unique(faker.color.human);
        for (let b= 0; b < numComments; b ++) {
            const newComment:CommentObj = {
                author: faker.name.fullName(),
                _id: faker.helpers.unique(faker.color.human),
                body: faker.company.catchPhrase(),
            }
            commentsArr.push(newComment);
        }
        const newPost: PostObj = {
            author: postAuthor,
            title: postTitle,
            dateCreated: postDate,
            body: postBody,
            _id: postId,
            comments: commentsArr,
        }
        outputArr.push(newPost);
    }
    return outputArr;
}
export default generatePosts;