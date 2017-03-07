import React, { Component } from 'react';

class UsersRow extends Component {


    render() {
        const users = this.props.data.map((el, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{el.username}</td>
                    <td>{el.recent}</td>
                    <td>{el.alltime}</td>
                </tr>
            )
        });
        return (
            <tbody>
            {users}
            </tbody>
        )
    }
}

export default UsersRow;