import React, { Component } from 'react';
import Filter from './Filter';
import List from './List';
import './App.css';

class App extends Component {
  getData() {
    if(self.fetch) {
        // run my fetch request here
        let url = 'https://rawgit.com/benschac/ea8eacba1121711e2e542732e6d3e12d/raw/3eff20b38cd2a8f7c36c5f3e7f196442338a2eab/active-nhl-players.json';
        fetch(url).then((response) => {
          if(response.status !== 200) {
            throw Error('Something went wrong' + response.status);
          }
          response.json().then((data) => {
            console.log('block fired');
            return Promise.resolve(data);
          });
        })
        .catch((err) => {
          console.log('Error with the Fetch API');
        });
    }
  }

  render() {
    return (
      <div>
      <Filter />
      <List players={this.getData()}/>
      </div>
    );
  }
}

export default App;
