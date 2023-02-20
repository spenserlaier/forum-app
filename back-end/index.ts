import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv"
import userRouter from "./routers/userRouter";

const app = express();


const port = 5001;

dotenv.config();
//console.log(process.env.TESTING_VAR);
const CONNECTION_STR = process.env.CONNECTION_STR || "simon says connect!";

const logger = morgan("combined");

app.use(express.json);
app.use(logger);

app.use("/user", userRouter);
app.get( "/", (req,res) => {
    //console.log(req.body);
    //res.send("yessir, looks like it's working");
    const bobjones = 5;
    const samjones = {thing1 :"ohsnap"}
    const pamjones = "awjeez"
    res.json({mything: bobjones, samjones, pamjones})
})

mongoose.connect(CONNECTION_STR);
app.listen(
    port,
    () => {console.log(`server running on port ${port}`)}  
);