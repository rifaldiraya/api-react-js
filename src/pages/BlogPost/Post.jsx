import React, { Fragment } from 'react';

const Post = (props) => {
  return (
    <Fragment>
      <div>
        <img className="img-thumb" src="http://placeimg.com/320/240/tech" alt="dummy-img" />
      </div>
      <div className="content-blog">
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </Fragment>
  );
};

export default Post;
