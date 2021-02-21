import React from "react";

const PostPut = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="http://placeimg.com/320/240/tech" alt="dummy-data" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="description">{props.data.body}</p>
        <button
          className="btn-update"
          onClick={() => props.update(props.data)}
        >
          Update
        </button>
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

export default PostPut;
