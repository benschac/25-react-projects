import React, { Component } from 'react';


class Controls extends Component {
    constructor() {
        super();
        this.toggle = false;
    }
   

    handleStartStop = () => {
    const { clockToggle } = this.props;
    
    
    this.toggle = !this.toggle;
    clockToggle(this.toggle);
    } 
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { intervalSet } = this.props;

        
        
        intervalSet(Number(this.interval.value * 60));
    }

    render() {
        
        return (
            <div>
                <button onClick={ this.handleStartStop }>Start/Stop</button>
                <button>Reset</button>
                <form onSubmit={this.handleSubmit}>
                    <label>Timer Length</label>
                    <input ref={(input) => this.interval = input } type="number" defaultValue="30"/>
                    <button type="submit" hidden>Submit</button>
                </form>
            </div>
        )

    }
}


export default Controls;