import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { fetchSignin } from '../api/fetch';
import user from '../duck/user/actions';

import '../styles/SignIn.sass';
import InputField from '../component/inputFields';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      email: '',
      fetching: false,
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.signin.request && this.props.signin.error && nextState.fetching) {
      console.log('Error');
      this.displayMessage(false, nextProps.signin.error);
    } else if (!this.props.signin.request && !this.props.signin.error && nextState.fetching) {
      console.log('Good');
      this.displayMessage(true, 'Registration finished');
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
    const { name, password, email } = this.state;
    const { fetchSignInStart, fetchSignInError, fetchSignInSuccess } = this.props;

    fetchSignInStart(name, password, email);
    try {
      const response = await fetchSignin(name, password, email);
      const result = await response.json();

      if (!response.ok) {
        fetchSignInError(name, password, email, result[0].message);
      } else fetchSignInSuccess(name, password, email, result.token);
    } catch (e) {
      fetchSignInError(name, password, email, e.message);
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
            value={this.state.email}
            handleChange={e => this.handleChange(e, 'email')}
            type="email"
            placeholder="Enter your email"
          />

          <InputField
            value={this.state.name}
            handleChange={e => this.handleChange(e, 'name')}
            type="text"
            placeholder="Enter your username"
          />

          <InputField
            value={this.state.password}
            handleChange={e => this.handleChange(e, 'password')}
            type="password"
            placeholder="Enter your password"
          />
          <InputField
            className="form__input form__input_submit "
            type="submit"
            value="Sign In"
          />
        </form>
        <h1 className="error-message">ERROR</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { signin: state.signin };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSignInStart: user.signInActions.fetchSignIn,
  fetchSignInSuccess: user.signInActions.fetchSignInSuccess,
  fetchSignInError: user.signInActions.fetchSignInError,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
