import React, { Component } from 'react';

class UsersCategoryRow extends Component {

    render() {
      
        return (
            <thead>
            <tr>
                <th>Rank</th>
                <th>Username</th>
                <th onClick={this.props.sortByRecent}>Recent</th>
                <th onClick={this.props.sortByAllTime}>AllTime</th>
            </tr>
            </thead>
        );
    }
}

export default UsersCategoryRow;