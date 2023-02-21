//import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";

import {UserState} from "./userSlice";
import {useSelector} from "react-redux";
const userReducer = userSlice.reducer;



export interface RootState {
    user: UserState;
}

const reducer = {
    user: userReducer,
}

export default reducer;