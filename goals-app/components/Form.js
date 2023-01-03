import { Component } from "react";

//PROCESS
//create input field
//create variable to handle input value using state
//assign onChange to input field
//onChange handler needs to set the state to input value using setState
//every input element needs its own method

class Form extends Component {
    state = { //update input value dynamically through state
        firstname: '',
        lastname: '',
    }

    handleFirstNameChange = (event) => { //mandatory in React to have an onChange method to handle change to the form input field
        this.setState({
            firstname: event.target.value
        })
        console.log(this.state.firstname)
    }

    handleLastNameChange = (event) => { //mandatory in React to have an onChange method to handle change to the form input field
        this.setState({
            lastname: event.target.value
        })
        console.log(this.state.lastname)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log({
            myfirstname: this.state.firstname,
            mylastname: this.state.lastname
        })
    }

    render() {
        return (
        <div>
            <h2>Form Component</h2>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleFirstNameChange} type="text" value={this.state.firstname} />
                <input onChange={this.handleLastNameChange} type="text" value={this.state.lastname} />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default Form;