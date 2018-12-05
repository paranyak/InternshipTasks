import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchUser } from '../api/fetch';
import user from '../duck/user/actions';
import InputField from '../component/inputFields';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(user.userActions, dispatch);

    this.state = {
      name: '',
      password: '',
      fetching: false,
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.login.request && this.props.login.error && nextState.fetching) {
      console.log('Error');
      this.displayMessage(false, nextProps.login.error);
    } else if (!this.props.login.request && !this.props.login.error && nextState.fetching) {
      console.log('Good');
      this.displayMessage(true, 'Login finished');
    }
    return true;
  }

  handleChange(event, type) {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { name, password } = this.state;

    console.log('START FETCHING ACTION');

    let action = user.userActions.fetchLogin(name, password);
    dispatch(action);
    try {
      const response = await fetchUser(name, password);
      const result = await response.json();
      console.log('response: ', result);
      if (!response.ok) action = user.userActions.fetchLoginError(name, password, result[0].message);
      else action = user.userActions.fetchLoginSuccess(name, password, result.token);
      dispatch(action);
    } catch (e) {
      action = user.userActions.fetchLoginError(name, password, e.message);
      dispatch(action);
    }
    this.setState({ fetching: true });
  }

  displayMessage(status, message) {
    const messageItem = document.querySelector('.error-message');
    console.log(message);
    messageItem.innerHTML = message;
    messageItem.style.visibility = 'initial';

    if (status) messageItem.style.color = 'white';
    else messageItem.style.color = '#ED4C67';
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={e => this.handleSubmit(e)} className="form">
          <InputField
            type="text"
            value={this.state.name}
            placeholder="Enter your name"
            handleChange={e => this.handleChange(e, 'name')}
          />

          <InputField
            type="password"
            value={this.state.password}
            placeholder="Enter your password"
            handleChange={e => this.handleChange(e, 'password')}
          />

          <InputField className="form__input form__input_submit " type="submit" value="Login" />
        </form>
        <h1 className="error-message">ERROR</h1>
        <Link to="/signin" className="redirect-link">Click to Sign In </Link>
      </div>
    );
  }
}

export default connect(state => ({ login: state.login }))(LoginForm);
