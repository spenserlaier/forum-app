import React from 'react';
import logo from './logo.svg';
import './App.css';
import ForumPost from "./components/CondensedPost";
import PostObject from "./objects/PostObj";
import Header from "./components/Header";
//import FullPost from "./components/FullPost";
import Login from "./components/Login";

function App() {
  let testPost: PostObject = {
    author: "bobjones",
    body: "this is the body of a post made by bobjones",
    title: "this is the title of bobjones' post",
    dateCreated: "this is the date when bobjones' post was made",
    id: "randomid1337", //id is still a string for now
    comments: []
  }
  return (
    <div className="App">
      <Header />
      <Login/>
      <ForumPost {...testPost} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
