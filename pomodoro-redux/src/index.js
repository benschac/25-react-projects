import React from 'react';
import ReactDOM from 'react-dom';
import Redux,{ createStore } from 'redux';
import App from './components/App';
import {
startTimer,
stopTimer,
editInterval,
resetTimer
} from './actions'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
