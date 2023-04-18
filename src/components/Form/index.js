import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChange(this.state.value)
    }

    onChange = (e) => {
        const {value} = e.target;

    this.setState({
        value
    })
}
    
    render () {
        return (
        <form onSubmit={this.onSubmit}>
            <input name="balance" type="number" placeholder="Sum"
            value={this.state.value}
            onChange={this.onChange}></input>
            <button>Save</button>
        </form>
        )
    }
}

export default Form;