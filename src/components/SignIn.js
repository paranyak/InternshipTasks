import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchSignin } from '../api/fetch'


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            email :""};
    }

    handleChange(event, type) {
        let newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Fetching start");
        this.props.fetchSignin(this.state.name, this.state.password, this.state.email);
        console.log("Fetching end");
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props !== nextProps){console.log("GET NEW USER", nextProps)}
        return true;
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} className={"form"}>
                    <label className={"form__label"}>
                        Enter your email:
                        <input className={"form__input"} value={this.state.email} onChange={(e) => this.handleChange(e, "email")} type="email" />
                    </label>

                    <label className={"form__label"}>
                        Enter your user name:
                        <input className={"form__input"} value={this.state.name} onChange={(e) => this.handleChange(e, "name")} type="text" />
                    </label>

                    <label className={"form__label"}>
                        Enter password:
                        <input className={"form__input"} value={this.state.password} onChange={(e) => this.handleChange(e, "password")} type="password" />
                    </label>
                    <input className={"form__input form__input_submit "}type="submit" value="Sign In" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("(Sign in)map state to props: ", state);
    return {
        ...state
    }};

const mapDispatchToProps = dispatch => ({
    fetchSignin: (name, password, email) => dispatch(fetchSignin(name, password, email))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

