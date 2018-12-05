import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from '../pages/LoginForm';
import SignIn from '../pages/SignIn';

class Navigation extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Navigation;
