import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchUser } from './api/fetch'


class Form extends Component {

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
               <form onSubmit={(e) => this.handleSubmit(e)}>
                   <label>
                       Name:
                       <input value={this.state.name} onChange={(e) => this.handleChange(e, "name")} type="text" />
                   </label>

                   <label>
                       Password:
                       <input value={this.state.password} onChange={(e) => this.handleChange(e, "password")} type="text" />
                   </label>
                   <input type="submit" value="Submit" />
               </form>
           </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("Here", state);
    return {
    ...state
}}
const mapDispatchToProps = dispatch => ({
    fetchUser: (name, password) => dispatch(fetchUser(name, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(Form);

