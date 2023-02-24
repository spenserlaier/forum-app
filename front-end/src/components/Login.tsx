import Header from "./Header";
import {useState, ChangeEvent} from "react";
import userSlice from "../reducers/userSlice";
import store from "../store/store";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import DefaultLayout from "./DefaultLayout";
import { login } from "../api";


const Login = () => {
    const [username, setUsername] = useState("bobjones");
    const [pass, setPass] = useState("samjones");
    
    const userLoggedIn = useSelector( (state: RootState) => {
        return (state.user.loggedIn)
    })
    
    const usernameConditions = (usernameInput:string) => {
        if (usernameInput.length <= 7) {
            return "too short";
        }
        else{
            return "";
        }
    }
    const passConditions = (passInput: string) => {
        if (passInput.length <=7)  {
            return "too short";
        }
        else {
            return "";
        }
    }
    const userErrMsg = usernameConditions(username);
    const  passErrMsg = passConditions(pass);
    const changeUsername = (ev: ChangeEvent<HTMLInputElement>) => {
        setUsername(ev.target.value);
    }
    const changePass = (ev: ChangeEvent<HTMLInputElement>) => {
        setPass(ev.target.value);
    }
    /*
    const handleSubmit = () => {
        if (userErrMsg === "" && passErrMsg === "") {
            console.log(store.getState().user);
            store.dispatch(userSlice.actions.setUsername(username));
            store.dispatch(userSlice.actions.setLoginTrue());
            console.log("setting the username and logging u in, broh");
            console.log(store.getState().user);
        }
        else{
            console.log("fix mistakes before submitting");
        }
        
    }
    */

    const handleSubmit = async () => {
        /*
        for this function, we'll contact the api and if the credentials are correct,
        we'll get an object with username, email, and token back--
        we can store the token in redux

        */
        if (userErrMsg === "" && passErrMsg === "") {

            console.log(store.getState().user);
            const res = await login(username, pass);
            if (res?.data.success == true) {
                store.dispatch(userSlice.actions.setUsername(res.data.username));
                store.dispatch(userSlice.actions.setLoginTrue());
                const token = res.data.token;
                store.dispatch(userSlice.actions.setToken(res.data.token));
                console.log("token is " + token)
                console.log("setting the username and logging u in, broh");
                console.log(store.getState().user);
            }
            else{
                console.log("error on the backend: ");
                console.log(res?.data.message);
            }
        }
        else{
            console.log("fix mistakes before submitting");
        }
        
    }
    
    
    const usernameProps = {
        value:username,
        onChange: changeUsername
    }
    const passwordProps = {
        value:pass,
        onChange: changePass
    }
    
    const loggedInText = <div>
        you're logged in already!
    </div>
    const notLoggedInText = 
        <div>
            <div>
                <TextField  error ={userErrMsg !== ""} label="username" inputProps={usernameProps}></TextField>
                <div> {userErrMsg !== "" && userErrMsg}</div>
            </div>
            <div>
                <TextField  error = {passErrMsg != ""} label="password" inputProps={passwordProps}></TextField>
                <div> {passErrMsg !== "" && passErrMsg}</div>
            </div>
            <Button onClick = {() => handleSubmit()}> Submit </Button>
            <div>
                or, <Button><Link to= "/createAccount"> create an account </Link> </Button>
            </div>
        </div>


    

    
    return (
        <DefaultLayout>
            {userLoggedIn? loggedInText: notLoggedInText}
        </DefaultLayout>
    )
}
export default Login;