import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    username: string;
    loggedIn: boolean;
    token: string | null;
}

/*
const initialState  = {
    username: ""
} as UserState
*/
    const initialState: UserState = {
        username: "",
        loggedIn: false,
        token: null
    }

const userSlice = createSlice(
    {
        name: "user",
        initialState: initialState,
        reducers: {
            setUsername(state, action:PayloadAction<string>) {
                state.username = action.payload;
            },
            setLoginTrue(state) {
                state.loggedIn = true;
            },
            setLoginFalse(state) {
                state.loggedIn = false;
            },
            setToken(state, action:PayloadAction<string>) {
                state.token = action.payload;
            }
        },
    }
)



//the slice object contains a number of fields,
//including its reducer as well as its actions 
export default userSlice;