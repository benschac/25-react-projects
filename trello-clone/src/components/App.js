import React, { Component } from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';


import '../App.css';

const App = () => (
    <div className="app-container">
      <div className="list">
        <AddTodo list="backlog"/>
        <VisibleTodoList list="backlog"/>
        <Footer list="backlog"/>
      </div>
      <div className="list">
        <AddTodo list="inprogress"/>
        <VisibleTodoList list="inprogress"/>
        <Footer list="inprogress"/>
      </div>
      <div className="list">
        <AddTodo list="done"/>
        <VisibleTodoList list="done"/>
        <Footer list="done"/>
      </div>
    </div>
)

export default App;
