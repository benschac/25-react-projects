import React, { Component } from 'react';
import { Link } from 'react-router';
// import teams from '../data/teams.js';

class AthletesMenu extends Component {

    componentWillReceiveProps(nextProps) {
        this.props.teams = nextProps.teams;
    }

    render() {
        let { teams } = this.props;
        
        console.log(teams, 'athletes component');
    
        return (
            <nav className="athletes-menu">
                {teams.map( (menuTeam, index) => {
                    index = index + 1;
                    return <Link key={menuTeam.abbreviation} 
                                 to={`/team/${menuTeam.abbreviation}`}
                                 activeClassName="active"
                                 className={`logo-bg--team-${index}`}
                                 style={{width: 40, height: 26}}>
                                 {menuTeam.teamName}
                          </Link>
                })}
            </nav>
        );
    }
}

export default AthletesMenu;