import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './App.css';


ReactDOM.render(
  <Board knightPosition={[0, 0]} />,
  document.getElementById('root')
);
