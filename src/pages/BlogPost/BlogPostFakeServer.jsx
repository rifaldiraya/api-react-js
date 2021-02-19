import React, { Component, Fragment } from "react";
import Post from "./Post";
import axios from "axios";

class BlogPostFakeServer extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3004/post").then((response) => {
      this.setState({
        post: response.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <p>Get API with Fake Server and Axios</p>
        {this.state.post.map((post) => {
          return (
            <Post key={post.id} title={post.title} description={post.body} />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPostFakeServer;
