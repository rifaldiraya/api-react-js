import React, { Component, Fragment } from "react";
import PostPost from "../PostPost";
import axios from "axios";

class BlogPostPostMethod extends Component {
  state = {
    post: [],
    blogPost: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
  };

  getAPI = () => {
    axios.get("http://localhost:3004/post?_sort=id&_order=desc").then((response) => {
      this.setState({
        post: response.data,
      });
    });
  };

  postAPI = () => {
    axios.post("http://localhost:3004/post", this.state.blogPost);
    this.getAPI();
  };

  handlerRemove = (data) => {
    axios.delete(`http://localhost:3004/post/${data}`);
    this.getAPI();
  };

  handlerChange = (event) => {
    let blogPostNew = { ...this.state.blogPost };
    let timeStampForID = new Date().getTime();
    blogPostNew["id"] = timeStampForID;
    blogPostNew[event.target.name] = event.target.value;
    this.setState({
      blogPost: blogPostNew,
    });
  };

  handlerSubmit = () => {
    this.postAPI();
  };

  componentDidMount() {
    this.getAPI();
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Add new Post with Post Method</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add title"
            onChange={this.handlerChange}
          />
          <label htmlFor="content">Content</label>
          <textarea
            name="body"
            placeholder="add content"
            onChange={this.handlerChange}
          />
          <button className="btn-submit" onClick={this.handlerSubmit}>
            Submit
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <PostPost key={post.id} data={post} remove={this.handlerRemove} />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPostPostMethod;
