import React, { Component } from 'react';
import Layout from './Layout';
import CountDownClock from './CountDownClock';
import Controls from './Controls';
import './App.css'

// v. ugly, shame.
let interval;
class App extends Component {
    constructor() {
        super();

        this.state = {
            pauses: 0,
            interval: 1800

        }
    }

    clockToggle = (toggle) => {
        if(toggle) {
            interval = setInterval(() => {
                let int = this.state.interval;
                int--;
                this.setState({
                    interval: int
                })
            }, 1000)
            
        } else {
            
            let pauses = this.state.pauses
            pauses++;
            console.log(pauses);
            this.setState({
                pauses
            })
            clearInterval(interval);
        }
    }

    intervalSet = (interval) => {
        this.setState({
            interval
        })
    }

    handleReset = (time) => {
        console.log('fired')
     clearInterval(interval);
     this.setState({
         interval: time
     })   
    }

    render() {
        return (
        <div className="container">
            <Layout>
                <CountDownClock
                    interval={this.state.interval} />
                <Controls
                    clockToggle={this.clockToggle}
                    intervalSet={this.intervalSet}
                    handleReset={this.handleReset}
                />
            </Layout>
        </div>
        )
    }
}


export default App;