import React, { Component } from 'react';

function ToggleButton(props) {
		return <button onClick={() => props.onClick()}>{props.camToggle ? "Snap" : "Take Another Photo"}</button>
}

function getVideo() {

}

export default class PhotoBooth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			camToggle: true
		}
	}

	toggleVideo() {
		this.setState({
			camToggle: !this.state.camToggle
		})
	}

	componentDidMount() {
		if(this.state.camToggle) {
			const video = document.querySelector('video');
			navigator.mediaDevices.getUserMedia({
		    video: true,
		    audio: false
		  })
		  .then(localmediastream => {
		    console.log(localmediastream);
		    video.src = window.URL.createObjectURL(localmediastream);
		    video.play();
		  })
		  .catch(err => console.error(err));

		}
	}

	componentDidUpdate() {
		const video = document.querySelector('video');
		let snap = document.querySelector('audio');

		if(this.state.camToggle) {
			navigator.mediaDevices.getUserMedia({
		    video: true,
		    audio: false
		  })
		  .then(localmediastream => {
		    console.log(localmediastream);
		    video.src = window.URL.createObjectURL(localmediastream);
		    video.play();
		  })
		  .catch(err => console.error(err));
		} else {
			snap.play();
			video.pause();
		}
	}


	render() {
		return (
			<div className="video-component">
				<video className="video" width="300" height="300"></video>
				<audio className="snap" src="http://wesbos.com/demos/photobooth/snap.mp3"></audio>

				<ToggleButton camToggle={this.state.camToggle}
											onClick={() => this.toggleVideo()}/>
			</div>
		)
	}
}
