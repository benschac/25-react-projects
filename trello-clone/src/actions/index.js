export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
let nextTodo = 0;


export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE',
}


export const addTodo = (text, list) => ({
     type: ADD_TODO, id: (nextTodo++).toString(), list, text 
});


export const toggleTodo = (id) => ({
     type: TOGGLE_TODO, id 
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO, id 
});


export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER, filter
});





