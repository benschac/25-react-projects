import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Redux,{ createStore, applyMiddleware } from 'redux';

import App from './components/App';
import {
startTimer,
stopTimer,
editInterval,
resetTimer
} from './actions'
import timerReducer from './reducers';
import loggerMiddleware from 'redux-logger';
import './index.css';

let store = createStore(
  timerReducer,
  applyMiddleware(
    loggerMiddleware
  )
)

store.dispatch(startTimer());
store.dispatch(stopTimer())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
