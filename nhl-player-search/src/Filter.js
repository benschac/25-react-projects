import React, { Component } from 'react';
import './App.css';


class Filter extends Component {
	constructor(props) {
		super(props);
		/*
		this.state = {
			inputValue: ''
		}
		*/
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		this.props.onChange(e.target.value);
	}
	/*
	handleInput = (event) => {
		this.setState({
			inputValue: event.target.value
		})
	}
	*/
	render() {
		return (
		  <div>
				<input value={this.props.inputValue} onChange={this.handleInput}/>
				<p>{this.props.inputValue}</p>
		  </div>
		);
	}
}

export default Filter;
