import mongoose from "mongoose";


<<<<<<< HEAD
const userSchema = new mongoose.Schema( {
=======
const UserSchema = new mongoose.Schema( {
>>>>>>> 3fc8768 (combining front and backend into one git repo)
    username: String,
    password: String,
    email: String
})

<<<<<<< HEAD
const UserModel = mongoose.model("user", userSchema);
=======
const UserModel = mongoose.model("UserModel", UserSchema);
>>>>>>> 3fc8768 (combining front and backend into one git repo)

export default UserModel;