import React, { Component, Fragment } from "react";
import PostDelete from "../PostDelete.jsx";
import axios from "axios";

class BlogPostDeleteMethod extends Component {
  state = {
    post: [],
  };

  updateData = () => {
    axios.get("http://localhost:3004/post").then((response) => {
      this.setState({
        post: response.data,
      });
    });
  };

  handlerRemove = (data) => {
    axios.delete(`http://localhost:3004/post/${data}`);
    this.updateData();
  };

  componentDidMount() {
    this.updateData();
  }

  render() {
    return (
      <Fragment>
        <p>Delete Method with Axios</p>
        {this.state.post.map((post) => {
          return (
            <PostDelete key={post.id} data={post} remove={this.handlerRemove} />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPostDeleteMethod;
