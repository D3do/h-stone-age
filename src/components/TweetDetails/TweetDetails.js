import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class TweetDetails extends Component {
  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const names = ['Ozzy', 'Bruce', 'James', 'Dave', 'Tom', 'Till', 'Ronnie', 'James', 'Dio', 'Neil'];
    let tweetDetails = <h2>Loading...</h2>;

    if(this.props.tweetDetails) {
      const tweet = this.props.tweetDetails;
      tweetDetails = (
        <React.Fragment>
          <div>
            <h2>User:</h2>
            <p>{names[tweet.userId - 1]}</p>
          </div>
          <div>
            <h2>Id:</h2>
            <p>{tweet.id}</p>
          </div>
          <div>
            <h2>Title:</h2>
            <p>{tweet.title}</p>
          </div>
          <div>
            <h2>Body:</h2>
            <p>{tweet.title}</p>
          </div>
        </React.Fragment>
      )
    }

    return (
      <ErrorBoundary>
        <div>
          <Button
            click={this.goBack}>
            Go back
        </Button>
          <h1>Details</h1>
          {tweetDetails}
        </div>
      </ErrorBoundary>
    )
  };
};

const mapStateToProps = state => {
  return {
    tweetDetails: state.tweetDetails
  }
}

export default withRouter(connect(mapStateToProps)(TweetDetails));