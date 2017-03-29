import React, { Component } from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';


import '../App.css';

const App = () => (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
)

export default App;
