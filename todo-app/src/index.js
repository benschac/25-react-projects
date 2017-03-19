import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore, combineReducers } from 'redux';
import store from './reducers/index.js';
import './index.css';

console.log(store)




// Basically Combine Reducers
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   }
// }



