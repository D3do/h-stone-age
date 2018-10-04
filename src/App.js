import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import TweetsLayout from './components/TweetsLayout/TweetsLayout';
import TweetDetails from './components/TweetDetails/TweetDetails';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={Auth} />
        <Redirect to='/' />
      </Switch>
    )

    if(this.props.loggedIn) {
      routes = (
        <Switch>
          <Route path='/posts/:postId' component={TweetDetails} />
          <Route path='/posts' component={TweetsLayout} />
          <Route path='/' exact component={Auth} />
        </Switch>
      )
    }

    return (
      <div className="App">
        {routes}
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
