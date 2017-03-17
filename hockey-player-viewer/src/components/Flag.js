import React, { Component } from 'react';

// Will be updated with NHL API.
const data = {
  'cu': {
    'name': 'Cuba',
    'icon': 'flag-cu.png',
  },
  'fr': {
    'name': 'France',
    'icon': 'flag-fr.png',
  },
  'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png',
  },
  'nl': {
    'name': 'Netherlands',
    'icon': 'flag-nl.png',
  },
  'uz': {
    'name': 'Uzbekistan',
    'icon': 'flag-uz.png',
  }
};

class Flag extends Component {
    
    render() {
    const { code, showName } = this.props;
    const name = data[code].name;
    const icon = data[code].icon;

        return (
            <span className="flag">
                <img className="icon" title={name} src={`img/${icon}`}/>
                { showName && <span className="name"> {name} </span> }
            </span>        
        );
    }
}

export default Flag;