import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv"
import userRouter from "./routers/userRouter";
<<<<<<< HEAD
<<<<<<< HEAD
import postRouter from "./routers/postRouter";
import commentRouter from "./routers/commentRouter";
import cors from "cors";

const app = express();
dotenv.config();
<<<<<<< HEAD
<<<<<<< HEAD
=======

const app = express();
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======
>>>>>>> f26fbac (backend interfaces; post/user logic)
=======

const app = express();
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======
>>>>>>> f26fbac (backend interfaces; post/user logic)


const port = 5001;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
dotenv.config();
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======
>>>>>>> f26fbac (backend interfaces; post/user logic)
=======
dotenv.config();
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======
>>>>>>> f26fbac (backend interfaces; post/user logic)
//console.log(process.env.TESTING_VAR);
const CONNECTION_STR = process.env.CONNECTION_STR || "simon says connect!";

const logger = morgan("combined");
<<<<<<< HEAD
<<<<<<< HEAD
const corsOptions = {
    origin: "http://localhost:3000"
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(logger);

app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
=======

app.use(express.json());
app.use(logger);

app.use("/user", userRouter);
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======

app.use(express.json());
app.use(logger);

app.use("/user", userRouter);
>>>>>>> 3fc8768 (combining front and backend into one git repo)
app.get( "/", (req,res) => {
    //console.log(req.body);
    //res.send("yessir, looks like it's working");
    const bobjones = 5;
    const samjones = {thing1 :"ohsnap"}
    const pamjones = "awjeez"
    res.json({mything: bobjones, samjones, pamjones})
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.get("/testRoute", (req, res) => {
    res.send("this was a successful test, indeed!");
})

const startServer = async () => {
    try{
        await mongoose.connect(CONNECTION_STR)
        app.listen(port, () => {console.log(`server running on port ${port}`)})
        mongoose.set('strictQuery', false);
    }
    catch (err){
        console.log("looks like something went wrong:")
        console.log(err);
    }
}
startServer();
=======
=======
>>>>>>> 3fc8768 (combining front and backend into one git repo)

mongoose.connect(CONNECTION_STR);
app.listen(
    port,
    () => {console.log(`server running on port ${port}`)}  
<<<<<<< HEAD
);
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======
app.get("/testRoute", (req, res) => {
    res.send("this was a successful test, indeed!");
})

=======
app.get("/testRoute", (req, res) => {
    res.send("this was a successful test, indeed!");
})

>>>>>>> f26fbac (backend interfaces; post/user logic)
const startServer = async () => {
    try{
        await mongoose.connect(CONNECTION_STR)
        app.listen(port, () => {console.log(`server running on port ${port}`)})
        mongoose.set('strictQuery', false);
    }
    catch (err){
        console.log("looks like something went wrong:")
        console.log(err);
    }
}
<<<<<<< HEAD
startServer();
>>>>>>> f26fbac (backend interfaces; post/user logic)
=======
);
>>>>>>> 3fc8768 (combining front and backend into one git repo)
=======
startServer();
>>>>>>> f26fbac (backend interfaces; post/user logic)
