import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import SingleTweet from '../SingleTweet/SingleTweet';
import Button from '../Button/Button';
import Input from '../Input/Input';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './TweetsLayout.scss';

class App extends Component {
  state = {
    visibleTweets: [],
    search: '',
    names: ['Ozzy', 'Bruce', 'James', 'Dave', 'Tom', 'Till', 'Ronnie', 'James', 'Dio', 'Neil'],
  }

  componentDidMount() {
    this.props.fetchTweets();

    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSearch = event => {
    this.setState({ search: event.target.value })
  }

  handleLogout = () => {
    sessionStorage.removeItem('user');
    this.props.logout();
    this.props.history.push('/');
  }

  tick() {
    const tweets = this.props.tweets;
    const visibleTweets = this.state.visibleTweets;
    
    if (visibleTweets.length >= tweets.length - 1) {
      clearInterval(this.interval);
    }

    this.setState((prevState) => {
      const tweetLoadedLength = prevState.visibleTweets.length;

      return {
        visibleTweets: [...prevState.visibleTweets, tweets[tweetLoadedLength]],
      };
    });
    console.log(this.state.visibleTweets)
  }

  render() {
    const names = ['Ozzy', 'Bruce', 'James', 'Dave', 'Tom', 'Till', 'Ronnie', 'James', 'Dio', 'Neil'];
    let searchText = this.state.search.toLowerCase();
    let filteredTweets = this.state.visibleTweets.filter(
      tweet => {
        return tweet.title.toLowerCase().indexOf(searchText) !== -1 || tweet.body.toLowerCase().indexOf(searchText) !== -1;
      }
    );

    return (
      <div className="TweetsLayout">
        <div className="Header">
          <Button
            className="Logout"
            click={this.handleLogout} >
            Logout
          </Button>
          <Input
            className="Search"
            name="search"
            type="text"
            placeholder="filter posts"
            handleChange={this.handleSearch}
            value={this.state.search}></Input>
        </div>
        <div className="Tweets">
          {
            filteredTweets.map(tweet => (
              <ErrorBoundary key={tweet.id}>
                <SingleTweet
                  name={names[tweet.userId - 1]}
                  title={tweet.title}
                  postId={tweet.id}
                  tweetDetails={() => {
                    this.props.fetchTweetDetails(tweet.id)
                  }}
                />
              </ErrorBoundary>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets,
    loading: state.fetchTweetsStart,
    error: state.error
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
