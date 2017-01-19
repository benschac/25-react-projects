import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';


class Chart extends Component {
	constructor(props) {
		super(props);

	}
  componentDidMount() {
    initializeChart(this.props.players)

  }

  componentDidUpdate() {
    updateChart(this.props.players);
  }

	render() {

		return (
      //<div className="chart">

      //</div>
      <svg className="chart" height="500px" width="900px"></svg>

		);
	}

}


function updateChart(players) {

  const width = 900;
  const height = 500;
  console.log('fired update');
  var agesMap = countAges(players);
  var ageKVpairs = decryptMap(agesMap);
  var ageMaxHeight = Math.max.apply(Math, ageKVpairs.map(function(ageGroup){ return ageGroup.count; }));

  console.log(ageMaxHeight);
  //console.log(agesMap, 'ages maps');

  var barWidth = width/ageKVpairs.length;

  // Select chart to work with and giving it data.
  var selection = d3.select(".chart")
    .selectAll("rect")
    .data(ageKVpairs);

  selection.exit()
    .remove();

  // Adding any rectangles for any new data points.
  selection.enter()
    .append("rect")
      .attr("x", (d,i)=>{ return i*barWidth })
      .attr("width", barWidth - 4)
      .attr("height", (d)=>{ return d.count * height / ageMaxHeight})
      .attr("y", (d)=>{ return height-(d.count*height / ageMaxHeight) })
      .attr("fill", "red");

  // Updating.
  selection
    .attr("x", (d,i)=>{ return i*barWidth })
    .attr("width", barWidth - 4)
    .attr("height", (d)=>{ return d.count * height/ageMaxHeight })
    .attr("y", (d)=>{ return height-(d.count * height/ageMaxHeight) })
    .attr("fill", "red");

}


function initializeChart(players) {

  const width = 900;
  const height = 500;

  var agesMap = countAges(players);
  var ageKVpairs = decryptMap(agesMap);

  var barWidth = width/ageKVpairs.length;

  var svg = d3.select(".chart")
    .selectAll("rect")
    .data(ageKVpairs)
    .enter()
    .append("rect")
      .attr("x", (d,i)=>{ return i*barWidth })
      .attr("width", barWidth - 4)
      .attr("height", (d)=>{ return d.count * height/1500 })
      .attr("y", (d)=>{ return height-(d.count*height/1500) })
      .attr("fill", "red")


  /*
  //var g = svg.append("g").attr("transform", "translate(")

  const chart = d3.select(".chart")
  .selectAll("div")
    .data(countAges(this.props.players))
  .enter().append("div")
    .style("width")
    */
}

function decryptMap(agesMap){
  var kvpairs = []
  for (let key in agesMap){
    kvpairs.push({
      age: key,
      count: agesMap[key]
    })
  }
  return kvpairs;
}

function countAges(players){
  return players.map(player => player.player.Age)
  .reduce((map, age) => {
    //let newMap = Object.assign({}, map)
    map[age] = map[age] ? ++map[age] : 1
    return map
  }, {});
}


export default Chart;
