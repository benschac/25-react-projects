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
      data: []
    }
    this.getData = this.getData.bind(this);
    this.sortByAllTime = this.sortByAllTime.bind(this);
    this.sortByRecent = this.sortByRecent.bind(this);
  }

  getData(url) {
    let myHeaders = new Headers();

    let options = { method: 'GET',
                  headers: myHeaders,
                  mode: 'cors',
                  cache: 'default' };
    fetch(url, options)
    .then(res => {
      
      return res.json()
    })
    .then(json => {
      
      this.setState({
        data: json
      })
    })
    .catch(err => {throw err})

  }
  
  componentDidMount() {
    this.getData(this.props.url + 'recent')
  }
  
  sortByRecent() {
    this.getData(this.props.url + 'recent')
  }

  sortByAllTime() {
    this.getData(this.props.url + 'alltime')
  }
   
  render() {
        
    return (
      <div className="leaderboard">
        <Header />
        <UsersTable 
        data={this.state.data}
        sortByAllTime={this.sortByAllTime}
        sortByRecent={this.sortByRecent}/>
        <Footer />
      </div>
    );
  }
}

export default App;
