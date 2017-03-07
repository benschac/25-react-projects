import React, { Component } from 'react';

class UsersRow extends Component {


    render() {
        console.log(this.props.data)
        const users = this.props.data.map((el, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><img width="40" height="40" src={el.img}/></td>
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