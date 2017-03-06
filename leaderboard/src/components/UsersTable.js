import React, { Component, PropTypes } from 'react';
import UsersCategoryRow from './UsersCategoryRow';
import UsersRow from './UsersRow';
class UsersTable extends Component {
    constructor() {
        super();
    }
    render() {

        return (
        <div>
        <table>
            <UsersCategoryRow />
            <UsersRow allUsers={this.props.allUsers}/>
        </table>     
        </div>
        );
    }
}



export default UsersTable;