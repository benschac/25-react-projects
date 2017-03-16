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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateSizeSpeed(+this.size.value, +this.speed.value)
    }

    render() {
        return (
            <div>
            <div>
                <h1>Settings</h1>
                <button onClick={this.props.startStop}>Start/Stop</button>
                <button onClick={this.props.clear}>Clear</button>
                <h3>Generations: {this.props.generation}</h3>
            </div>
            <form ref={(input) => this.form = input } onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                    <p>Board Size:</p>
                    <input 
                        ref={(input) => this.size = input } 
                        type="number"
                        defaultValue={20} />
                </div>
                <div>
                    <p>Speed in seconds</p>
                    <input 
                        ref={(input) => this.speed = input } 
                        type="number"
                        defaultValue={.25}
                        step={.25} />
                    
                </div>
                <button type="submit">Submit</button>
            </form>

            </div>
            
        )
    }
} 



export default Controls;