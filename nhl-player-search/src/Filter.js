import React, { Component } from 'react';
import './App.css';


class Filter extends Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
		  <div>
				<input value={this.props.inputValue} placeholder="Player Search" onChange={this.handleInput}/>
		  </div>
		);
	}
}

export default Filter;
