import React from 'react';
import { Link } from 'react-router-dom';

const SingleTweet = (props) => (
  <React.Fragment>
    <h2>UserId:</h2>
    <p>{props.name}</p>
    <Link
      to={`/posts/${props.postId}`}
      onClick={props.tweetDetails}
    >
      <h2>Title:</h2>
      <p>{props.title}</p>
    </Link>
  </React.Fragment>
);

export default SingleTweet;
