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
  constructor(props) {
    super(props);
    this.state = {
      allTimeUsers: [],
      recentUsers: []
    }
  }
  
  componentWillMount() {
    let headers = new Headers();
    let urlAlltime = `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`;
    let urlrecent = `https://fcctop100.herokuapp.com/api/fccusers/top/recent`;
    let allTimeData = getData(urlAlltime);
    let recentData = getData(urlrecent);
    let options = {
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default'
    }

    function getData(url) {
      return fetch(url, options)
      .then(val => {
        return val.json();
      })
      .then(val => {
         return val;
      })
      .catch(err => {throw err});
    }
    
    Promise.all([allTimeData, recentData])
      .then(res => {
        console.log('alltime', res[0], 'recent', res[1]);
        this.setState({
          allTimeUsers: res[0],
          recentUsers: res[1]
        })
      })
      .catch(err => {throw err});
  }
    
  

  render() {
  const listUsersAlltime = this.state.allTimeUsers.map((user) =>
    <li>{user.username}</li>
    );
    return (
      <div className="leaderboard">
        <ul>
          <li>{listUsersAlltime}</li>
        </ul>
        <Header />
        <UsersTable />
        <Footer />
      </div>
    );
  }
}

export default App;
