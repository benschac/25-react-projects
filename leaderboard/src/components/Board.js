import React, { Component, PropTypes } from 'react';

class Board extends Component {
    render() {
        return (
        <div>
        <table>
            <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th>Points in past 30 days</th>
            <th>All time points</th>
            </tr>
            <tr>
            <td>1</td>
            <td>benschac</td>
            <td>400</td>
            <td>1000</td>
            </tr>
            <tr>
            <td>1</td>
            <td>benschac</td>
            <td>400</td>
            <td>1000</td>
            </tr>
            <tr>
            <td>1</td>
            <td>benschac</td>
            <td>400</td>
            <td>1000</td>
            </tr>
            </table>     
            </div>
        );
    }
}

Board.propTypes = {

};

export default Board;