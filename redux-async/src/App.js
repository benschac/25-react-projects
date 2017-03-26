import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import './App.css';
import { 
  selectSubreddit,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  invalidateSubreddit,
  fetchPosts,
  fetchPostsIfNeeded
} from './actions';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
