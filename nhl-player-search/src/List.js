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
				{players.activeplayers.playerentry.filter((player) => {
					return player.player.FirstName.toUpperCase().indexOf(this.props.inputValue.toUpperCase()) !== -1 ||
					 player.player.LastName.toUpperCase().indexOf(this.props.inputValue.toUpperCase()) !== -1
					 || player.player.Age === this.props.inputValue;
				}).map((player)=> {
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
