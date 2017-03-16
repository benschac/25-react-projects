import React, {Component} from 'react';

class Controls extends Component {

    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.generation !== this.props.generation) {
            this.render();
        }
    }

    render() {
        return (
            <div>
            <div>
                <h1>Hello from Controls</h1>
                <button onClick={this.props.startStop}>Start/Stop</button>
                <button>Clear</button>
                <h3>Generations: {this.props.generation}</h3>
            </div>
            <div>
                <p>Board Size:</p>
                <input type="number" />
            </div>
            <div>
                <p>Speed in seconds</p>
                <input type="number"/>
                
            </div>
            </div>
            
        )
    }
} 



export default Controls;