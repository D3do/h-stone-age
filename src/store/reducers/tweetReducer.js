import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tweets: [],
  fetchTweetsStart: false,
  fetchTweetsError: false,
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
        tweets: action.tweets
      }

    case actionTypes.FETCH_TWEETS_ERROR:
      return {
        ...state,
        fetchTweetsError: true
      }

    default:
      return reducer;
  }
};

export default reducer;