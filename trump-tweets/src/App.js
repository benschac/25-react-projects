import React, { Component } from 'react';
import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      url: ''
    }
    this.handleQuoteClick = this.handleQuoteClick.bind(this);
    this.handleClickTweet = this.handleClickTweet.bind(this);
  }


  handleQuoteClick() {
    let url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
    let headers = new Headers();
    let options = {
               method: 'GET',
               headers,
               mode: 'cors',
               cache: 'default'
              }

    
    fetch(url, options)
    .then(res => {
      return res.json()
    })
    .then(json => {
      this.setState({quote: json.message})
    })
    .catch(err => {throw err});
  }

  handleClickTweet() {
    let quote = this.state.quote;
    let newstr = quote.replace(/ /i, '+');
    quote = quote.replace(/ /g, "%20")
    return `https://twitter.com/intent/tweet?text=${quote}`;
  }


  render() {

    return (
      <div className="app">
        <div className="quote">
        {
          this.state.quote
        }
        </div>
        <button onClick={(this.handleQuoteClick)}>button</button>
        <a target="_blank"><button>Tweet</button></a>     
      </div>
    );
  }
}

export default App;
