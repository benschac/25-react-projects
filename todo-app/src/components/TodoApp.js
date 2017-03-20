import React, { Component } from 'react';
import FilterLink from './FilterLink.js';
import store from '../index.js';
import TodoList from './TodoList.js';
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
                <TodoList 
                    todos={visibleTodos}
                    onCompleteClick={ id => 
                        store.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })
                    }

                    onToggleEditClick={ id =>
                        store.dispatch({
                            type: 'TOGGLE_EDIT',
                            id  
                        })
                    }

                    onEditTodo={ (id, text) => {
                        console.log(id, text)
                        store.dispatch({
                            type: 'EDIT_TODO',
                            text: text,
                            id  
                        })
                    }
                        
                    }
                    onDeleteTodo={id => 
                        store.dispatch({
                                type: 'DELETE_TODO',
                                id
                        })
                    }
                    />
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