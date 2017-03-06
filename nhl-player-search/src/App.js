import React, { Component } from 'react';
import Filter from './Filter';
import List from './List';
import Chart from './Chart';
import players from './players.json';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.state = {inputValue:''};
  }

  handleInputValue(inputValue){
    this.setState({inputValue});
  }
  getData() {
    // To-do figure out what's going on here.
    if (self.fetch) {
        // run my fetch request here
        let url = 'https://rawgit.com/benschac/ea8eacba1121711e2e542732e6d3e12d/raw/3eff20b38cd2a8f7c36c5f3e7f196442338a2eab/active-nhl-players.json';
        fetch(url).then((response) => {
          if(response.status !== 200) {
            throw Error('Something went wrong' + response.status);
          }
          response.json().then((data) => {
            return Promise.resolve(data);
          });
        })
        .catch((err) => {
          console.log('Error with the Fetch API');
        });
    }
  }

  render() {
    let filteredPlayers = filterPlayers(this.state.inputValue, players.activeplayers.playerentry)
    return (
      <div>

      <Chart players={filteredPlayers} onChange={this.state.inputValue} />
      <Filter inputValue={this.state.inputValue}
        onChange={this.handleInputValue} />
      <List players={filteredPlayers} />

      </div>
    );
  }
}
function filterPlayers(inputValue, players) {
  return players.filter((player) => {
    return player.player.FirstName.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 ||
     player.player.LastName.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 ||
     (player.team &&
     player.team.Name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1)
     || player.player.Age === inputValue;
   })
}

export default App;
