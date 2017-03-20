import React, { Component } from 'react';
import FilterLink from './FilterLink.js';
import store from '../index.js';
import getVisibleTodos from '../utilities/index.js'


let nextToDoId = 0;
class TodoApp extends Component {
    render() {
        const { todos, visibilityFilter } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        );

       
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
                
                    {visibleTodos.map(todo => 
                        
                        <div key={todo.id}>
                        {todo.edit ? 
                        <div>
                        <input ref={(input) => this.text = input } defaultValue={todo.text} />
                        <button onClick={ () => {
                            store.dispatch({
                                      type: 'EDIT_TODO',
                                      text: this.text.value,
                                      id: todo.id  
                            })
                        }}
                        type="submit">Submit</button>
                        </div> :
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
                <p>
                    Show:
                    {' '}
                    <FilterLink filter="SHOW_ALL"
                                currentFilter={visibilityFilter}>
                    All
                    </FilterLink>
                    {' '}
                    <FilterLink filter="SHOW_ACTIVE"
                                currentFilter={visibilityFilter}>
                    Active
                    </FilterLink>
                    {' '}
                    <FilterLink filter="SHOW_COMPLETED"
                                currentFilter={visibilityFilter}>
                    Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}

export default TodoApp;