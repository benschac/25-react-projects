import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import AppRoutes from './components/AppRoutes';


window.onload = () => {
    render(<AppRoutes />, document.getElementById('main'));
}