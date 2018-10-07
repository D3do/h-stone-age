import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import TweetsLayout from './components/TweetsLayout/TweetsLayout';
import TweetDetails from './components/TweetDetails/TweetDetails';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NotFound from './components/NotFound/NotFound';
import './App.scss';

class App extends Component {
  state = {
    error: false,
    errorMessage: ''
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={Auth} />
        <Redirect to='/' />
        <Route path="*" component={NotFound} />
      </Switch>
    )

    if(this.props.loggedIn) {
      routes = (
        <Switch>
          <Route path='/posts/:postId' component={TweetDetails} />
          <Route path='/posts' component={TweetsLayout} />
          <Route path='/' exact component={Auth} />
          <Route path="*" component={NotFound} />
        </Switch>
      )
    }

    return (
      <div className="App">
        <ErrorBoundary>
          {routes}
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default withRouter(connect(mapStateToProps)(App));
