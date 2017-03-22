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

    handleReset = () => {
        this.toggle = !this.toggle;
        this.props.handleReset(1800);
    }

    

    render() {
        
        return (
            
            <div>
                <button onClick={ this.handleStartStop }>{this.toggle ? "Stop" : "Start"}</button>
                <button onClick={this.handleReset}>Reset</button>
                
                    {
                        this.toggle ? 
                        "" :
                        <form onChange={this.handleSubmit}>
                        <label>Timer Length</label>
                        <input ref={(input) => this.interval = input } type="number" defaultValue={this.props.interval / 60}/>
                        <button type="submit" hidden>Submit</button>
                        </form>
                        
                    }
                    
                    
                
            </div>
        )

    }
}


export default Controls;