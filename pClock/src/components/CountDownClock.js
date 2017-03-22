import React from 'react';

const zeroPad = (number) => {
  return number < 10 ? "0" + number : number;
}

console.log(zeroPad(9));

const CountDownClock = ({
  interval
}) => (
  <div>
    <h1>{zeroPad(Math.floor(interval / 60)) + " : " + zeroPad(interval % 60) }</h1>
  </div>
);

export default CountDownClock;