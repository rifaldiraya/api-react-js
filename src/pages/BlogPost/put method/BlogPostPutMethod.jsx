import React, { Component, Fragment } from "react";
import PostPut from "../PostPut";
import axios from "axios";

class BlogPostPutMethod extends Component {
  state = {
    post: [],
    blogPost: {
      userID: 1,
      id: 1,
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  getAPI = () => {
    axios
      .get("http://localhost:3004/post?_sort=id&_order=desc")
      .then((response) => {
        this.setState({
          post: response.data,
        });
      });
  };

  postNewData = () => {
    axios
      .post("http://localhost:3004/post", this.state.blogPost)
      .then((res) => {
        this.getAPI();
        this.setState({
          blogPost: {
            userID: 1,
            id: 1,
            title: "",
            body: "",
          },
        });
      });
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/post/${this.state.blogPost.id}`,
        this.state.blogPost
      )
      .then((res) => {
        this.getAPI();
        this.setState({
          blogPost: {
            userID: 1,
            id: 1,
            title: "",
            body: "",
          },
          isUpdate: false,
        });
      });
  };

  handlerChange = (event) => {
    let newBlogPost = { ...this.state.blogPost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      newBlogPost["id"] = timeStamp;
    }
    newBlogPost[event.target.name] = event.target.value;
    this.setState(
      {
        blogPost: newBlogPost,
      },
      () => {
        console.log(this.state.blogPost);
      }
    );
  };

  handlerRemove = (data) => {
    axios.delete(`http://localhost:3004/post/${data}`);
    this.getAPI();
  };

  handlerSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postNewData();
    }
  };

  handlerUpdate = (data) => {
    console.log(data);
    this.setState({
      blogPost: data,
      isUpdate: true,
    });
  };

  componentDidMount() {
    this.getAPI();
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Edit data with Put Method</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            className="title"
            placeholder="add title"
            name="title"
            value={this.state.blogPost.title}
            onChange={this.handlerChange}
          />
          <label htmlFor="body">Content</label>
          <textarea
            className="body"
            name="body"
            placeholder="add content"
            value={this.state.blogPost.body}
            onChange={this.handlerChange}
          />
          <button className="btn-submit" onClick={this.handlerSubmit}>
            Submit
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <PostPut
              key={post.id}
              data={post}
              remove={this.handlerRemove}
              update={this.handlerUpdate}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPostPutMethod;
