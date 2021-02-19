import React, { Component, Fragment } from 'react';
import Post from '../Post';

class BlogPostFetch extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(result => 
      this.setState({
        post: result
      }))
    }

  render() {
    return (
      <Fragment>
        <p>Get API wtih Fetch</p>
        {
          this.state.post.map(post => {
            return <Post key={post.id} title={post.title} description={post.body} />
          })
        }
      </Fragment>
    );
  }
}

export default BlogPostFetch;
