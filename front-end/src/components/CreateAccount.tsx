import { useState, ChangeEvent } from "react";
import DefaultLayout from "./DefaultLayout"
import { Button, TextField} from "@mui/material";
import userSlice from "../reducers/userSlice";
import store from "../store/store";


const CreateAccount = () => {
    const [newUsername, setNewUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    
    const handleUsernameChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setNewUsername(ev.target.value);
    }
    const handlePasswordChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setPassword(ev.target.value);
    }
    const handleVerifyChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setVerifyPassword(ev.target.value);
    }
    const handleEmailChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setEmail(ev.target.value);
    }
    const newUsernameProps = {
        value: newUsername,
        onChange: handleUsernameChange
    }
    const newPassProps = {
        value: password,
        onChange: handlePasswordChange
    }
    const verifyPassProps = {
        value: verifyPassword,
        onChange: handleVerifyChange
    }
    const emailProps = {
        value: email,
        onChange: handleEmailChange
    }
    const usernameConditions = (usernameInput:string) => {
        // when we implement backend we'll also want to make sure
        // the username isn't taken already
        //though, probably makes more sense to check that at submission time
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
    const verifyPassConditions = (passInput: string) => {
        if (passInput !== password) {
            return "passwords must match"
        }
        else{
            return "";
        }
    }
    //TODO: email error handling

    const userErrMsg = usernameConditions(newUsername);
    const passErrMsg = passConditions(password);
    const verifyErrMsg = verifyPassConditions(verifyPassword);
    
    const submitAccountInfo = () => {
        //TODO: backend verification, ie make sure username isn't taken
        if (userErrMsg === "" && passErrMsg === "" && verifyErrMsg === "") {
            console.log("account created");
            console.log(store.getState().user);
            store.dispatch(userSlice.actions.setUsername(newUsername));
            store.dispatch(userSlice.actions.setLoginTrue());
            console.log("setting the username and logging u in, broh");
            console.log(store.getState().user);

        }
        else{
            console.log("fix errors before proceeding");
        }

        
    }
    
    
    
    

    return (
        <DefaultLayout>
            <div>
                this is where you'll be able to create an account
                <div>
                    <TextField error= {userErrMsg !== ""} label="username" inputProps={newUsernameProps}></TextField>
                    {userErrMsg !== "" && userErrMsg}

                </div>
                <div>
                    <TextField error = {passErrMsg !== ""} label="password"inputProps={newPassProps}></TextField>
                    {passErrMsg !== "" && passErrMsg}
                </div>
                <div>
                    <TextField error = {verifyErrMsg !== ""} label="verify password" inputProps={verifyPassProps}></TextField>
                    {verifyErrMsg !== "" && verifyErrMsg}
                    
                </div>
                <div>
                    <TextField label = "email" inputProps={emailProps}></TextField>
                    
                </div>
                <Button onClick={() => submitAccountInfo()}> Create your account </Button>
            </div>
        </DefaultLayout>
    )
}
export default CreateAccount;