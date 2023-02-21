import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//redux imports
import {configureStore} from "@reduxjs/toolkit";
import { Provider} from "react-redux";

// component imports will go in this section
import App from './App';
import Login from "./components/Login";
import AllPosts from "./components/AllPosts";
import FullPost from "./components/FullPost";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile";
import CreateAccount from './components/CreateAccount';



// store import
import store from "./store/store";


import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter( [
  {
    path: "/",
    element: <AllPosts />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/viewPost/:postId",
    element: <FullPost />
  },
  {
    path: "/createPost",
    element: <CreatePost />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "createAccount",
    element: <CreateAccount />
  }



]

)
root.render(
    <React.StrictMode>
        <Provider store= {store}>
            <RouterProvider router = {router}/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
