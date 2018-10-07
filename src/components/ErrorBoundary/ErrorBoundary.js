import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    if(this.state.hasError) {
      return (
        <React.Fragment>
          <h3>Something went wrong...</h3>
          <p>{this.state.errorMessage}</p>
        </React.Fragment>
      )
    } else {
      return this.props.children;
    }
  };
};

export default ErrorBoundary;
