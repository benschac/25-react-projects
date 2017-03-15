import React from 'react';
import Board from './Board';

class BoardContainer extends React.Component {

    constructor(props){
        super(props);
    }



    render() {
        var { size, pixels, toggleLife } = this.props;
        return <Board size={size}
                      pixels={pixels}
                      toggleLife={toggleLife} />
    }
} 

export default BoardContainer;