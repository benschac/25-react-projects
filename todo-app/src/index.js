import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import TodoApp from './components/TodoApp.js';
import './index.css';
const store = createStore(rootReducer);


const render = () => {
    ReactDOM.render( <TodoApp todos={store.getState().todos}
                              visibilityFilter={store.getState().visibilityFilter} />,
    document.getElementById('root')
    );
};


store.subscribe(render);
render();
export default store;


