import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchTweets();
  }

  render() {
    return (
      <div className="App">
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
    fetchTweets: () => dispatch(actions.fetchTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
