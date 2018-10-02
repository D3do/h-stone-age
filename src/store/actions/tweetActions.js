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
