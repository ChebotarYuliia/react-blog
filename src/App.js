import React, { Component } from 'react';
import './App.css';
import BlogPosts from "./BlogPosts/Posts/Posts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogPosts />
      </div>
    );
  }
}

export default App;
