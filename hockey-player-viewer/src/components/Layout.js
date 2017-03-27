import React, { Component } from 'react';
import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';
import athletes from '../data/athletes.js';
import AthletesMenu from './AthletesMenu';
let teams = {};

class Layout extends Component {
    
    
    render() {
        console.log('after setting', this.state.teams)
        console.log(teams.data)
        const { children } = this.props;
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <img className="logo" src="/img/logo-judo-heroes.png"/>
                    </Link>
                </header>
                <div>
                    <AthletesMenu teams={this.state.teams}/>
                </div>
                <div className="app-content">
                    { children }
                </div>
                <footer>            
                    This is was an application built with universal javascript setup using React + Express.
                </footer>
            </div>
        );
    }
}

export default Layout;