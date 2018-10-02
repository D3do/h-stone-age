import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tweets: [],
  fetchTweetsStart: false,
  fetchTweetsError: false,
  tweetDetails: {},
  fetchTweetDetailsStart: false,
  fetchTweetDetailsError: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_TWEETS_START:
      return {
        ...state,
        fetchTweetsStart: true
      }

    case actionTypes.FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        fetchTweetsStart: false,
        tweets: action.tweets.reverse()
      }

    case actionTypes.FETCH_TWEETS_ERROR:
      return {
        ...state,
        fetchTweetsError: true
      }

    case actionTypes.FETCH_TWEET_DETAILS_START:
      return {
        ...state,
        fetchTweetDetailsStart: true
      }

    case actionTypes.FETCH_TWEET_DETAILS_SUCCESS:
      return {
        ...state,
        fetchTweetDetailsStart: false,
        tweetDetails: action.tweetDetails
      }

    case actionTypes.FETCH_TWEET_DETAILS_ERROR:
      return {
        ...state,
        fetchTweetDetailsError: true
      }

    default:
      return reducer;
  }
};

export default reducer;