import  { combineReducers } from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})


// Root Reducer
export default rootReducer;