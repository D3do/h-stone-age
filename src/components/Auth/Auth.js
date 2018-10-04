import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Auth extends Component {
  state = {
    userName: '',
    userNameError: '',
    password: '',
    passwordError: '',
    isFormValid: false,
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  validateForm = () => {
    let isError = false;
    let {userName, password} = this.state;
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if(userName.length < 5) {
      isError = true;
      this.setState({userNameError: 'Username needs to be at least 5 characters long'});
    } else {
      this.setState({userNameError: ''});
    }

    if(!password.match(passwordRegex)) {
      isError = true;
      this.setState({ passwordError: 'Password should contains 8 characters, at least one small letter, at least one capital letter, at least one number'});
    } else {
      this.setState({passwordError: ''});
    }

    if(!isError) {
      this.setState({isFormValid: true});
      this.props.login();
      this.props.history.push('/posts');
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.validateForm();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <Input
          name="userName"
          label="Username"
          type="text"
          placeholder="username"
          handleChange={this.handleChange}
          value={this.state.userName}
          errorText={this.state.userNameError} />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="password"
          handleChange={this.handleChange}
          value={this.state.password}
          errorText={this.state.passwordError} />
        <Button>Login</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(actions.login())
  }
}

export default connect(null, mapDispatchToProps)(Auth);