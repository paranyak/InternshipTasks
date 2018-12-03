import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Link } from 'react-router-dom';


import * as fromFetch from '../actions/index';
import {fetchUser} from '../api/fetch'


class LoginForm extends Component {

    constructor(props) {
        super(props);
        const {dispatch} = props;

        this.boundActionCreators = bindActionCreators(fromFetch, dispatch);

        this.state = {
            name: "",
            password: "",
            fetching : false
        };
    }

    handleChange(event, type) {
        let newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    async handleSubmit(event) {
        event.preventDefault();
        let {dispatch} = this.props;
        const {name, password} = this.state;
        //start fetching
        let action = fromFetch.fetchUserStart(name, password);
        dispatch(action);
        try {
            let response = await fetchUser(name, password);
            let result = await response.json();
            if(!response.ok)action = fromFetch.fetchUserError(name, password, result[0].message);
            else action = fromFetch.fetchUserSuccess(name, password, result.token);
            dispatch(action);
        }
        catch (e) {
            action = fromFetch.fetchUserError(name, password, e.message);
            dispatch(action);
        }
        this.setState({"fetching":true});

    }
    shouldComponentUpdate(nextProps, nextState){

        if(!this.props.login.request && this.props.login.error && nextState.fetching){ console.log("Error");this.displayMessage(false, nextProps.login.error)}
        else if(!this.props.login.request && !this.props.login.error && nextState.fetching){ console.log("Good");this.displayMessage(true, "Login finished")}

        return true;
    }

    displayMessage(status, message){
        let messageItem = document.querySelector(".error-message");
        console.log(message);
        messageItem.innerHTML = message;
        messageItem.style.visibility = "initial";

        if(status)messageItem.style.color = "white";
        else messageItem.style.color = "#ED4C67";
    }


    render() {
        return (
            <div className="form-container">
                <form onSubmit={(e) => this.handleSubmit(e)} className="form">
                    <input className="form__input" value={this.state.name} onChange={(e) => this.handleChange(e, "name")} type="text" placeholder={"Name"}/>

                    <input className="form__input" value={this.state.password} onChange={(e) => this.handleChange(e, "password")} type="password" placeholder={"Password"}/>

                    <input className="form__input form__input_submit "  type="submit" value="Login" />
                </form>
                <h1 className={"error-message"}>ERROR</h1>

                <Link to="/signin" className="redirect-link">Click to Sign In </Link>
            </div>
        );
    }
}



export default connect(state => ({login: state.login}))(LoginForm);