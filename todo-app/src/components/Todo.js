import React from 'react';

const Todo = ({
    onCompleteClick,
    onToggleEdit,
    onEditTodo,
    onDeleteTodo,
    completed,
    text,
    edit,
    id,

}) => (
        <div>
            {edit ? 
            <div>
            <input ref={(input) => this.text = input } defaultValue={text} />
            <button onClick={onEditTodo}
            type="submit">Submit</button>
            </div> :
            <div>
                <li
                    onClick={onToggleEdit}
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