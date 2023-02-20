import mongoose from "mongoose";


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const userSchema = new mongoose.Schema( {
=======
const UserSchema = new mongoose.Schema( {
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======
const userSchema = new mongoose.Schema( {
>>>>>>> f26fbac (backend interfaces; post/user logic)
=======
const UserSchema = new mongoose.Schema( {
>>>>>>> 3fc8768 (combining front and backend into one git repo)
    username: String,
    password: String,
    email: String
})

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const UserModel = mongoose.model("user", userSchema);
=======
const UserModel = mongoose.model("UserModel", UserSchema);
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======
const UserModel = mongoose.model("user", userSchema);
>>>>>>> f26fbac (backend interfaces; post/user logic)
=======
const UserModel = mongoose.model("UserModel", UserSchema);
>>>>>>> 3fc8768 (combining front and backend into one git repo)

export default UserModel;