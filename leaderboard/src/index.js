import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './components/index.css';

ReactDOM.render(
  <App url={'https://fcctop100.herokuapp.com/api/fccusers/top/'}/>,
  document.getElementById('root')
);
