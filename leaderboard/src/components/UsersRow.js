import React, { Component } from 'react';

class UsersRow extends Component {


    render() {
        const users = this.props.data.map((el, index) => {
            return (
                <tr key={index}>
                    <td className="image-container"><img width="40" height="40" alt="avatar" className="avatar" src={el.img}/><span className="rank">{index + 1}</span></td>
                    <td>{el.username}</td>
                    <td>{el.recent}</td>
                    <td colSpan="2">{el.alltime}</td>
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