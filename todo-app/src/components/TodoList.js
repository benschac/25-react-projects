import React from 'react';
import Todo from './Todo.js';

const ToDoList = ({
    todos,
    onCompleteClick,
    onToggleEdit,
    onEditToDo,
    onDeleteTodo
}) => (
    <ul>
        {
            todos.map(todo => {
                <Todo key={todo.id}
                      {...todo}
                      onCompleteClick={() => onCompleteClick(todo.id)}
                      onToggleEdit={() => onToggleEdit(todo.id)}
                      onEditToDo={() => onEditToDo(todo.id, todo.text)}
                      onDeleteTodo={() => onDeleteTodo(todo.id)}

                />
            })
        }
    </ul>
    
);

export default ToDoList;