import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchUser } from '../api/fetch'
import {Link } from 'react-router-dom';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {name: "",
        password: ""};
    }

    handleChange(event, type) {
        let newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

     handleSubmit(event) {
        event.preventDefault();
        console.log("Fetching start");
        this.props.fetchUser(this.state.name, this.state.password);
        console.log("Fetching end");
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props !== nextProps){console.log("GET NEW USER", nextProps)}
        return true;
    }


    render() {
        return (
           <div>
               <form onSubmit={(e) => this.handleSubmit(e)} className="form">
                   <input className="form__input" value={this.state.name} onChange={(e) => this.handleChange(e, "name")} type="text" placeholder={"Name"}/>

                   <input className="form__input" value={this.state.password} onChange={(e) => this.handleChange(e, "password")} type="password" placeholder={"Password"}/>

                   <input className="form__input form__input_submit "  type="submit" value="Login" />
               </form>

               <div className="redirect-link">
                 <Link to="/signin">Click to Sign In </Link>
                </div>
           </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("(FORM)map state to props: ", state);
    return {
    ...state
}};

const mapDispatchToProps = dispatch => ({
    fetchUser: (name, password) => dispatch(fetchUser(name, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

