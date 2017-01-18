import React, { Component } from 'react';
import './App.css';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
	}

	handleInput = (event) => {
		this.setState({
			inputValue: event.target.value
		})
	}

	render() {
		return (
		  <div>
				<input value={this.state.inputValue} onChange={this.handleInput}/>
				<p>{this.state.inputValue}</p>
		  </div>
		);
	}
}

export default Filter;
