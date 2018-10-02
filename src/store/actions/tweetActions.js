import * as actionTypes from './actionTypes';

export const fetchTweetsStart = () => {
  return {
    type: actionTypes.FETCH_TWEETS_START
  };
};

export const fetchTweetsSuccess = tweets => {
  return {
    type: actionTypes.FETCH_TWEETS_SUCCESS,
    tweets
  };
};

export const fetchTweetsError = error => {
  return {
    type: actionTypes.FETCH_TWEETS_ERROR,
    error
  };
};

export const fetchTweets = () => {
  return dispatch => {
    dispatch(fetchTweetsStart());

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dispatch(fetchTweetsSuccess(data)))
      .catch(error => dispatch(fetchTweetsError(error)));
  };
};

export const fetchTweetDetailsStart = () => {
  return {
    type: actionTypes.FETCH_TWEET_DETAILS_START
  };
};

export const fetchTweetDetailsSuccess = tweetDetails => {
  return {
    type: actionTypes.FETCH_TWEET_DETAILS_SUCCESS,
    tweetDetails
  };
};

export const fetchTweetDetailsError = () => {
  return {
    type: actionTypes.FETCH_TWEET_DETAILS_ERROR
  };
};

export const fetchTweetDetails = postId => {
  return dispatch => {
    dispatch(fetchTweetDetailsStart());

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => dispatch(fetchTweetDetailsSuccess(data)))
      .catch(error => dispatch(fetchTweetDetailsError(error)));
  };
};
