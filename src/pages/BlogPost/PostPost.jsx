import React from "react";

const PostPost = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="http://placeimg.com/320/240/tech" alt="dummy-img" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="description">{props.data.body}</p>
        <button
          className="btn-remove"
          onClick={() => props.remove(props.data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default PostPost;
