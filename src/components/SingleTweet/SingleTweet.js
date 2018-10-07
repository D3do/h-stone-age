import React from 'react';
import { Link } from 'react-router-dom';
import './SingleTweet.scss';

const SingleTweet = (props) => (
  <div className="SingleTweet">
    <div className="Row">
      <h3>UserId:</h3>
      <p>{props.name}</p>
    </div>
    <Link
      to={`/posts/${props.postId}`}
      onClick={props.tweetDetails}
    >
      <div className="Row">
        <h3>Title:</h3>
        <p>{props.title}</p>
      </div>
    </Link>
  </div>
);

export default SingleTweet;
