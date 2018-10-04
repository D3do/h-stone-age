import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import SingleTweet from '../SingleTweet/SingleTweet';
import Button from '../Button/Button';

class App extends Component {
  state = {
    tweets: [],
    visibleTweets: []
  }

  componentDidMount() {
    this.props.fetchTweets();
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    const names = ['Ozzy', 'Bruce', 'James', 'Dave', 'Tom', 'Till', 'Ronnie', 'James', 'Dio', 'Neil'];
    let tweets = <p>Loading...</p>
    if (this.props.tweets) {
      tweets = (
        this.props.tweets.map(tweet => (
          <SingleTweet
            key={tweet.id}
            name={names[tweet.userId - 1]}
            title={tweet.title}
            postId={tweet.id}
            tweetDetails={() => {
              this.props.fetchTweetDetails(tweet.id)
            }}
          />
        ))
      )
    }

    return (
      <div className="TweetsLayout">
        <Button click={this.handleLogout}>Logout</Button>
        <div className="tweets">
          {tweets}
        </div>
        test
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
    fetchTweetDetails: tweetId => dispatch(actions.fetchTweetDetails(tweetId)),
    logout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
