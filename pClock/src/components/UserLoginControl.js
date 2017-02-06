import React, { Component } from 'react';


function LogIn(props) {
  return (
    <button onClick={props.onClick}> Log In</button>
  );
}

function LogOut(props) {
  return (
    <button onClick={props.onClick}> Log Out</button>
  );
}

class UserLoginControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false
    }

  }

  handleStatusClick = () => {
    console.log(this);
    this.setState((prev) => ({status: !prev.status }));
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }
  render() {
    const loggedIn = this.state.status;
    let btn = null;
    if(loggedIn) {
      // Warning, giving a click handler a cb function might
      // not be the greatest idea in the world.
      btn = <LogIn onClick={() => this.handleStatusClick() }/>
    } else {
      btn = <LogOut onClick={() => this.handleStatusClick() }/>
    }
    return (
      <div>
      {btn}
      </div>

    );
  }
}

export default UserLoginControl;
