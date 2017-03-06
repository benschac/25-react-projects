import React, { Component } from 'react';
import Header from './Header';
import UsersTable from './UsersTable';
import Footer from './Footer';
import './App.css';

class App extends Component {
  /**
   * Top 100 users 30 days endpoint: https://fcctop100.herokuapp.com/api/fccusers/top/recent.
   * Top 100 users all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
   */
  
  componentWillMount() {
    let headers = new Headers();
    let url30 = `https://fcctop100.herokuapp.com/api/fccusers/top/recent`;
    let options = {
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default'
    }
    
    fetch(url30, options)
    .then(val => {
      return val.json();
    })
    .then(val => console.log(val))
    .catch(err => {throw err});
  }
  

  render() {
    return (
      <div className="leaderboard">
        <Header />
        <UsersTable />
        <Footer />
      </div>
    );
  }
}

export default App;
