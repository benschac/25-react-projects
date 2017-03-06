import React, { Component } from 'react';
import './App.css';

class App extends Component {
  /**
   * Top 100 users 30 days endpoint: https://fcctop100.herokuapp.com/api/fccusers/top/recent.
   * Top 100 users all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
   */

  render() {
    return (
      <div className="leaderboard">
        <div className="leaderboard-header">
          <h2>Leaderboard</h2>
        </div>
        <table>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th>Points in past 30 days</th>
          <th>All time points</th>
        </tr>
        <tr>
          <td>1</td>
          <td>benschac</td>
          <td>400</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>benschac</td>
          <td>400</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>benschac</td>
          <td>400</td>
          <td>1000</td>
        </tr>
        </table>
        <footer>
          <h3>By Benjamin Schachter</h3>
        </footer>
      </div>
    );
  }
}

export default App;
