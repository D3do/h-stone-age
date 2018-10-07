import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './TweetDetails.scss';

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
          <div className="Row">
            <h3>User:</h3>
            <p>{names[tweet.userId - 1]}</p>
          </div>
          <div className="Row">
            <h3>Id:</h3>
            <p>{tweet.id}</p>
          </div>
          <div className="Row">
            <h3>Title:</h3>
            <p>{tweet.title}</p>
          </div>
          <div className="Row">
            <h3>Body:</h3>
            <p>{tweet.body}</p>
          </div>
        </React.Fragment>
      )
    }

    return (
      <ErrorBoundary>
        <div className="TweetDetails">
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