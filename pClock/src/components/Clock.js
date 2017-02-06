import React, { Component } from 'react';
import UserInteractions from './UserInteractions.js';

// Functional Stateless Component
function FormatDate(props) {
  return (
      <h1>The time is: {props.date.toLocaleTimeString()}</h1>
  )
}

function msToTime(duration) {

            var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

function FormatPause(props) {
  return (
    <div>
    <h1>Clock has been off for {msToTime(props.paused - props.date)} </h1>
    <p>The timer has been stopped: {props.stops} {props.stops > 1 ? "times" : "time"}</p>
    </div>
  )
}



class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      isToggleOn: true,
      paused: new Date(),
      stops: 0,
      arr: []
      }

    // this.handleClick = this.handleClick.bind(this);
  }


  handleClick = () => {
    console.log('fired', this);
    // this.setState(prev => {toggle: !prev.toggle})
    if(this.state.isToggleOn) {
        clearInterval(this.timeId);
        this.countStop();
        this.handleStops();
        this.toggle();

        this.setState((prev) => ({
          
        }))
    } else {
        this.toggle();
        clearInterval(this.stopId);
        this.timeId = setInterval(
          () => this.tick(),
        1000);

      }
    }


  toggle() {
      this.setState(prev => ({isToggleOn: !prev.isToggleOn}));
  }

  countStop() {
    this.stopId = setInterval(
      () => this.stopTick(),
      100
    );
  }

  componentWillMount() {
    this.timeId = setInterval(
      () => this.tick(),
    1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }


  tick() {
    this.setState({date: new Date()});
  }

  stopTick() {
    this.setState({paused: new Date()});
  }

  handleStops = () => {
    this.setState((prev) => ({stops :prev.stops + 1}));
  }
  render() {
    let record = this.state.interactionRecord;
    return (
      <div>
          <h1>Hello</h1>
          <FormatDate date={this.state.date} />
          {
            !this.state.isToggleOn ? <FormatPause paused={this.state.paused}
                                      date={this.state.date}
                                      stops={this.state.stops} /> : ""
          }
          <button onClick={this.handleClick}>{this.state.isToggleOn ? "On" : "Off"}</button>
          <UserInteractions paused={this.state.paused.toLocaleTimeString()} stops={this.state.stops}/>
      </div>
    );
  }
}

export default Clock;
