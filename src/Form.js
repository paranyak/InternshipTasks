import React, { Component } from 'react';

import { connect } from 'react-redux';
import { simpleAction } from './actions'


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {name: "",
        password: ""};
    }

    handleChange(event, type) {
        let newState = {};
        newState[type] = event.target.value;
        console.log("New state:", newState, this.state);
        this.setState(newState);
    }

    handleSubmit(event) {

        event.preventDefault();
        alert("A name was submitted: " + this.state.name + "password: " + this.state.password);

        console.log("Simple action start");
        this.props.simpleAction();
        console.log("Simple action end");
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

const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(Form);

