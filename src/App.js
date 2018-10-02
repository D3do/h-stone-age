import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import SingleTweet from './components/SingleTweet/SingleTweet';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    loggedIn: false,
    tweets: []
  }

  componentDidMount() {
    this.props.fetchTweets();
  }

  render() {
    const names = ['1a', '2b', '3c', '4d', '5e', '6f', '7g', '8h', '9i', '10j'];
    let tweets = <p>Loading...</p>
    if(this.props.tweets) {
      tweets = (
        this.props.tweets.map(tweet => (
          <SingleTweet
            key={tweet.id}
            name={names[tweet.userId - 1]}
            title={tweet.title}
            tweetDetails={() => {
              this.props.fetchTweetDetails(tweet.id)
            }}
          />
        ))
      )
    }

    return (
      <div className="App">
        <Button>{this.state.loggedIn ? 'Log out' : 'Log in'}</Button>
        <div className="tweets">
          {tweets}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets,
    loading: state.fetchTweetsStart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: () => dispatch(actions.fetchTweets()),
    fetchTweetDetails: tweetId => dispatch(actions.fetchTweetDetails(tweetId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
