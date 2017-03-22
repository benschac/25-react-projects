import React from 'react';

const CountDownClock = ({
  interval
}) => (
  <div>
    <h1>{Math.floor(interval / 60) + " : " + interval % 60 }</h1>
  </div>
);

export default CountDownClock;