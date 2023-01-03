import {Component} from 'react';

class Resume extends Component {

    render() {
        const { name } = this.props; //destructuring props in class component
        return <p>{name}</p>
    }
}

export default Resume;