import React, { Component } from 'react';
import './App.css';
import players from './players.json';

class List extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		console.log(players)
		return (
		  <div>
		  <h1> Hello List </h1>
			<ul>
				{players.activeplayers.playerentry.map((player)=> {
					return(
						<li key={player.player.ID}>{player.player.FirstName} {player.player.LastName}{player.team ? ", "+player.team.Name : ""}</li>
					)
				})}
			</ul>


			<button onClick={this.getData}>Test</button>
		  </div>
		);
	}
}

export default List;
