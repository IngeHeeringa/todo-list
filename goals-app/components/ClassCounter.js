import { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = { //state is mutable, props are not
            counter: 0
        };
        this.increment = this.increment.bind(this); //1st binding option: binding is needed to make this keyword accessible in method when calling the event by this.method (second most recommended)
    }

    increment() {
        this.setState({ //state can only be changed through setState, not directly on state object
            counter: this.state.counter + 1,
        });
    }

    decrement = () => { //2nd binding option: by converting function into an arrow function, the this keyword becomes accessible (most recommended)
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Class-based Counter</h2>
                <p>The count is: {this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default ClassCounter;