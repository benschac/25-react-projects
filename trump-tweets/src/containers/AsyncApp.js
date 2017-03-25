import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestQuotes, receiveQuotes } from '../actions'


import Quotes from '../components/Quotes'

class AsyncApp extends Component {
    constructor(props) {
    super(props);

    }

    componentDidMount() {
        console.log('hello');
    }

    componentDidUpdate(prevProps) {
        
    }

    handleChange = (nextQuote) => {
        this.props.dispatch(fetched)
    }

}