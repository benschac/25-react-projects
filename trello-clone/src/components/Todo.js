import React, { PropTypes } from 'react';
import { Segment } from 'semantic-ui-react';

const Todo = ({onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
        <Segment>
        { text }
        </Segment>
    </li>
)


Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo