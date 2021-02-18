import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "./Post";

class BlogPostAxios extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <p>Get API with Axios</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} description={post.body} />;
        })}
        <Post title="" description="" />
      </Fragment>
    );
  }
}

export default BlogPostAxios;
