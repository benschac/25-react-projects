import React, { Component } from 'react';
import './App.css';

class List extends Component {
	constructor(props) {
		super(props);

	}
	getData() {
if(self.fetch) {
    // run my fetch request here
		let url = 'https://rawgit.com/benschac/ea8eacba1121711e2e542732e6d3e12d/raw/3eff20b38cd2a8f7c36c5f3e7f196442338a2eab/active-nhl-players.json';
		fetch(url).then((response) => {
			console.log(response);
			if(response.status !== 200) {
				throw Error('Something went wrong' + response.status);
			}
			response.json().then((data) => {
				console.log(data);
			});
		})
		.catch((err) => {
			console.log('Error with the Fetch API');
		});
} else {
    // do something with XMLHttpRequest?
}
	}

	render() {
		return (
		  <div>
		  <h1> Hello List </h1>
			<table>
			  <tr>
			    <th>Firstname</th>
			    <th>Lastname</th>
			    <th>Age</th>
			    <th>Number</th>
			    <th>Weight</th>
			    <th>Team</th>
			    <th>Height</th>
			  </tr>
			  <tr>
			    <td>Jill</td>
			    <td>Smith</td>
			    <td>50</td>
			  </tr>
			  <tr>
			    <td>Eve</td>
			    <td>Jackson</td>
			    <td>94</td>
			  </tr>
			  <tr>
			    <td>John</td>
			    <td>Doe</td>
			    <td>80</td>
			  </tr>
			</table>
			<button onClick={this.getData}>Test</button>
		  </div>
		);
	}
}

export default List;
