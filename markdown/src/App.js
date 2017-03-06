import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import marked from 'marked';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'}
  }
  updateValue = (modifiedValue) => {
    this.setState({value: modifiedValue});
  }

  createMarkup = () => {
  return {__html: marked(this.state.value, {sanitize: true})};
  }

  rawMarkup = (event) => {
    console.log(this);
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <textarea defaultValue={this.state.value} onChange={this.rawMarkup}></textarea>
        <div className="markup" dangerouslySetInnerHTML={this.createMarkup()}>

        </div>
      </div>
    );
  }
}

export default App;
