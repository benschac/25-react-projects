import React from 'react';

class Pixel extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			alive: this.props.alive
		}
	}

	render() {
		var stateClass = this.state.alive ? "alive" : "dead"
		return (<div 
			style={{"top": 10*this.props.y, "left": 10*this.props.x}}
			className={"pixel pixel-"+stateClass}>
		</div>);
	}

}

export default Pixel;