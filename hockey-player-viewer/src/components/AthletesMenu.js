import React, { Component } from 'react';
import { Link } from 'react-router';

class AthletesMenu extends Component {

    render() {
        const { athletes } = this.props;
        return (
            <nav className="athletes-menu">
                {athletes.map( menuAthlete => {
                    return <Link key={menuAthlete.id} 
                                 to={`/athlete/${menuAthlete.id}`}
                                 activeClassName="active">
                                 {menuAthlete.name}
                          </Link>
                })}
            </nav>
        );
    }
}

export default AthletesMenu;