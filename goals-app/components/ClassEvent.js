import { Component } from 'react';

class ClassEvent extends Component {
    handleClick() { //method instead of function as compared to functional eventhandling
        console.log('this also works')
    }

    render() {
        return (
            <div>
                <h2>Class-based component</h2>
                <button onClick={this.handleClick}>Click</button>
            </div>
            )
    }
}

export default ClassEvent;