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
    const { fetchUserStart, fetchUserSuccess, fetchUserError } = this.props;
    const { name, password } = this.state;

    console.log('START FETCHING ACTION');

    fetchUserStart(name, password);
    try {
      const response = await fetchUser(name, password);
      const result = await response.json();
      console.log('response: ', result);
      if (!response.ok) fetchUserError(name, password, result[0].message);
      else fetchUserSuccess(name, password, result.token);
    } catch (e) {
      fetchUserError(name, password, e.message);
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

const mapStateToProps = (state) => {
  return { login: state.login };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserStart: user.userActions.fetchUser,
  fetchUserSuccess: user.userActions.fetchUserSuccess,
  fetchUserError: user.userActions.fetchUserError,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
