import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export const todos = (state = [], action ) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        },
      ]
    default:
      return state;
  }
}
