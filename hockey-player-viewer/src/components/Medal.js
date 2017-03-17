import React, { Component } from 'react';

const typeMap = {
  'G': 'Gold',
  'S': 'Silver',
  'B': 'Bronze'
};


class Medal extends Component {
    render() {
        const { year, city, event, category } = this.props;
        return (
            <li className="Medal">
                <span className={`symbol symbol-${type}`} title={typeMap[type]}>{type}</span>
                <span className="year">{year}</span>
                <span className="city">{city}</span>
                <span className="event">{event}</span>
                <span className="category">{category}</span>
            </li>
        );
    }
}

export default Medal;