import React from 'react';
import { Link } from 'react-router-dom';

const SingleTweet = (props) => (
  <div>
    <h2>UserId:</h2>
    <p>{props.name}</p>
    <Link
      to={`/posts/${props.postId}`}
      onClick={props.tweetDetails}
    >
      <h2>Title:</h2>
      <p>{props.title}</p>
    </Link>
  </div>
);

export default SingleTweet;
