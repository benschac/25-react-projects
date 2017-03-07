import React, { Component } from 'react';
import UsersCategoryRow from './UsersCategoryRow';
import UsersRow from './UsersRow';
class UsersTable extends Component {

    render() {
        return (
        <div>
        <table>
            <UsersCategoryRow sortByAllTime={this.props.sortByAllTime}
                            sortByRecent={this.props.sortByRecent}/>
            <UsersRow data={this.props.data} />
        </table>     
        </div>
        );
    }
}



export default UsersTable;