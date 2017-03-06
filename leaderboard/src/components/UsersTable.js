import React, { Component, PropTypes } from 'react';
import UsersCategoryRow from './UsersCategoryRow';
import UsersRow from './UsersRow';
class UsersTable extends Component {
    render() {
        return (
        <div>
        <table>
            <UsersCategoryRow />
            <UsersRow />
        </table>     
        </div>
        );
    }
}

UsersTable.propTypes = {

};

export default UsersTable;