import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { fetchSignin } from '../../api/fetch';
import user from './actions';

import '../../styles/SignIn.sass';

class SignIn extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(user.signInActions, dispatch);

    this.state = {
      name: '',
      password: '',
      email: '',
      fetching: false,
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    // if(this.state !== nextState){console.log("GET ", nextState, this.state)}
    // if(this.props !== nextProps){console.log("PET ", nextProps, this.props)}
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
    const { dispatch } = this.props;
    const { name, password, email } = this.state;
    // start fetching
    let action = user.signInActions.fetchSignIn(name, password, email);
    dispatch(action);
    try {
      const response = await fetchSignin(name, password, email);
      const result = await response.json();

      if (!response.ok) {
        action = user.signInActions.fetchSignInError(name, password, email, result[0].message);
      } else action = user.signInActions.fetchSignInSuccess(name, password, email, result.token);
      dispatch(action);
    } catch (e) {
      action = user.signInActions.fetchSignInError(name, password, email, e.message);
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

          <input
            className="form__input"
            value={this.state.email}
            onChange={e => this.handleChange(e, 'email')}
            type="email"
            placeholder="Enter your email"
          />

          <input
            className="form__input"
            value={this.state.name}
            onChange={e => this.handleChange(e, 'name')}
            type="text"
            placeholder="Enter your username"
          />

          <input
            className="form__input"
            value={this.state.password}
            onChange={e => this.handleChange(e, 'password')}
            type="password"
            placeholder="Enter your password"
          />
          <input
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

export default connect(state => ({ signin: state.signin }))(SignIn);
