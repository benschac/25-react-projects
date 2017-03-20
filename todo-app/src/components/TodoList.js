import React from 'react';
import Todo from './Todo.js';

const ToDoList = ({
    todos,
    onCompleteClick,
    onToggleEditClick,
    onEditTodo,
    onDeleteTodo
}) => (
    <ul>
        {
            todos.map(todo => {
            return (
                <Todo key={todo.id}
                        {...todo}
                        onCompleteClick={() => onCompleteClick(todo.id)}
                        onToggleEditClick={() => onToggleEditClick(todo.id)}
                        onEditTodo={() => onEditTodo(todo.id, todo.text)}
                        onDeleteTodo={() => onDeleteTodo(todo.id)}

                />
            )
            })
        }
    </ul>
    
);

export default ToDoList;
