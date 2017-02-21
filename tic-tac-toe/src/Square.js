import React from 'react';
// Sqaure is a stateless functional controlled component.
// We don't need a react component because we're not changing
//state.
// All data is passed in through props.
export default function Square(props) {
    return (

      // no longer need this.props. 
      <button onClick={() => props.onClick()}
      className="square">
      {/* Takes value, and spits it out in Component */}
        {props.value}
      </button>
    );
}
