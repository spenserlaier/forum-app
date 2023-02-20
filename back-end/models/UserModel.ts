import mongoose from "mongoose";


const UserSchema = new mongoose.Schema( {
    username: String,
    password: String,
    email: String
})

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;