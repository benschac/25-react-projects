import React from 'react';


const Todo = ({
    todo,
    text,
    edit,
    id,
    onCompleteClick,
    onToggleEditClick,
    onEditTodo,
    onDeleteTodo,
    completed,

}) => (
        <div>
            {edit ? 
            <div>
            <input ref={ (input) => text = input } defaultValue={text} />
            <button onClick={(text) => onEditTodo(text)}
            type="submit">Submit</button>
            </div> :
            <div>
                <li
                    onClick={onToggleEditClick}
                    style={{
                            textDecoration:
                            completed ?
                            'line-through' : 'none'
                        }}
                    >{text}</li>
                    <button
                    onClick={onCompleteClick}
                    >
                    {completed ? "Undo" : "Completed" } 
                    </button>
                    <button
                    onClick={onDeleteTodo}
                    >delete</button>
            </div> 
            }
        </div>
);

export default Todo;