import React, { Component } from 'react';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import Footer from './Footer.js';
import store from '../index.js';
import getVisibleTodos from '../utilities/index.js'


let nextToDoId = 0;
const TodoApp = ({
    todos,
    visibilityFilter
}) =>  {
 
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        );

       
        return (
            <div>
                <AddTodo onAddClick={text => 
                    store.dispatch({
                    type: 'ADD_TODO',
                    id: nextToDoId++,
                    text,
                })
                }
                />
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
                    // remove or refactor
                    onEditTodo={ (id, text) => {
                    }
                        
                    }
                    onDeleteTodo={id => 
                        store.dispatch({
                                type: 'DELETE_TODO',
                                id
                        })
                    }
                    />
                <Footer 
                    visibilityFilter={visibilityFilter}
                    
                    />
                
            </div>
        );
    
}

export default TodoApp;