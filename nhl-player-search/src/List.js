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
			<ul>
				{this.props.players.map((player)=> {
					return(
						
						<li key={player.player.ID}>{player.player.FirstName} {player.player.LastName} {player.player.Age}{player.team ? ", "+player.team.Name : ""}</li>
					)
				})}
			</ul>
		  </div>
		);
	}
}

export default List;
