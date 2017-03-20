import React, { Component } from 'react';
import store from './index.js'; 


let nextToDoId = 0;
class TodoApp extends Component {
    render() {
        const { todos } = this.props;
                
        return (
            <div>
                <input ref={ node => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextToDoId++
                    })
                    this.input.value = '';
                }}>
                Add ToDo
                </button>
                <ul>
                
                    {todos.map(todo => 
                        
                        <div key={todo.id}>
                        {todo.edit ? <input defaultValue={todo.text} /> :
                        <div>
                            <li
                                onClick={ () => {
                                    store.dispatch({
                                      type: 'TOGGLE_EDIT',
                                      id: todo.id  
                                    })
                                }}
                                style={{
                                        textDecoration:
                                        todo.completed ?
                                        'line-through' : 'none'
                                    }}
                                >{todo.text}</li>
                                <button
                                onClick={() => {
                                    store.dispatch({
                                        type: 'TOGGLE_TODO',
                                        id: todo.id
                                    })
                                    
                                }}
                                >
                                {todo.completed ? "Undo" : "Completed" } 
                                </button>
                                <button
                                onClick={() => {
                                    store.dispatch({
                                        type: 'DELETE_TODO',
                                        id: todo.id
                                    })
                                }}
                                >delete</button>
                        </div> 
                        }
                        </div>
                    )}
                
                </ul>
            </div>
        );
    }
}

export default TodoApp;