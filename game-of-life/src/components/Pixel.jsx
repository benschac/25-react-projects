import React from 'react';

class Pixel extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			alive: this.props.alive
		}

	}

	handleClick = () => {
		let { x, y, pixelSize } = this.props;
		this.setState({
			alive: !this.state.alive
		})
		this.props.toggleLife({x, y});
	}

	render() {
		let stateClass = this.state.alive ? "alive" : "dead"
		let { x, y, pixelSize } = this.props;
		return (<div 
			style={{"top": pixelSize*y, "left": pixelSize*x}}
			className={"pixel pixel-"+stateClass} onClick={this.handleClick}>
		</div>);
	}

}

export default Pixel;