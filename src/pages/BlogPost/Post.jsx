import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="http://placeimg.com/320/240/tech" alt="dummy-img" />
      </div>
      <div className="content">
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <button className="btn-remove">Remove</button>
      </div>
    </div>
  );
};

export default Post;
