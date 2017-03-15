import React from 'react';

class Pixel extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			alive: this.props.alive
		}

	}

	handleClick = () => {
		let { x, y } = this.props;
		this.setState({
			alive: !this.state.alive
		})
		this.props.toggleLife({x, y});
	}

	render() {
		var stateClass = this.state.alive ? "alive" : "dead"
		return (<div 
			style={{"top": 10*this.props.y, "left": 10*this.props.x}}
			className={"pixel pixel-"+stateClass} onClick={this.handleClick}>
		</div>);
	}

}

export default Pixel;