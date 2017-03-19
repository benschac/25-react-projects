import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
    
    render() {
        const { children } = this.props;
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <img className="logo" src="/img/logo-judo-heroes.png"/>
                    </Link>
                </header>
                <div className="app-content">
                    { children }
                </div>
                <footer>
                <div className="logo-bg--team-njd">
                <h2>Devils svg here</h2>
                </div>
                
                    This is was an application built with universal javascript setup using React + Express.
                </footer>
            </div>
        );
    }
}

export default Layout;