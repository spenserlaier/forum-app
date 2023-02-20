import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv"
import userRouter from "./routers/userRouter";
import postRouter from "./routers/postRouter";
import commentRouter from "./routers/commentRouter";

const app = express();
dotenv.config();


const port = 5001;

//console.log(process.env.TESTING_VAR);
const CONNECTION_STR = process.env.CONNECTION_STR || "simon says connect!";

const logger = morgan("combined");

app.use(express.json());
app.use(logger);

app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.get( "/", (req,res) => {
    //console.log(req.body);
    //res.send("yessir, looks like it's working");
    const bobjones = 5;
    const samjones = {thing1 :"ohsnap"}
    const pamjones = "awjeez"
    res.json({mything: bobjones, samjones, pamjones})
})
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