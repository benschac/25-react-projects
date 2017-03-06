import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';
import './App.css';

class App extends Component {
  /**
   * Top 100 users 30 days endpoint: https://fcctop100.herokuapp.com/api/fccusers/top/recent.
   * Top 100 users all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
   */

  render() {
    return (
      <div className="leaderboard">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
