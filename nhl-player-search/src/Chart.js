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

      <svg className="chart" height="500px" width="900px"></svg>

		);
	}

}


function updateChart(players) {

  const width = 900;
  const height = 500;

  var agesMap = countAges(players);
  var ageKVpairs = decryptMap(agesMap);

  var ageMaxHeight = Math.max.apply(Math, ageKVpairs.map(function(ageGroup){ return ageGroup.count; })) + 40;

  var barWidth = width/ageKVpairs.length;

  // Select chart to work with and giving it data.
  var selection = d3.select(".chart")
    .selectAll("g")
    .data(ageKVpairs);


  selection.exit()
    .remove();

  // Adding any rectangles for any new data points.
  var newG = selection.enter()
    .append("g");

  var groups = d3.selectAll("g")

  groups
    .attr("transform", (d,i)=>{ console.log("Height", height, "d.count", d.count,"i", i, "agemaxheight", ageMaxHeight); return "translate("+(i*barWidth)+","+(height-(d.count*height/ageMaxHeight))+")" })


  // Updating.
  groups.selectAll("rect")
    .attr("width", barWidth - 4)
    .attr("height", (d)=>{ console.log("age", d.age, "bar height", d.count * height / ageMaxHeight); return d.count * height/ageMaxHeight })
    .attr("fill", "red");
    selection.exit()
      .remove();
  newG.append("rect")
      .attr("width", barWidth - 2)
      .attr("height", (d)=>{ return d.count * height / ageMaxHeight})
      .attr("fill", "red")

  newG.append("text")
      .text(function(d) { return d.age; })
      .attr("x", 2)
      .attr("y", 2)



  console.log(ageKVpairs)


}


function initializeChart(players) {

  const width = 900;
  const height = 500;

  var agesMap = countAges(players);
  var ageKVpairs = decryptMap(agesMap);

  var ageMaxHeight = Math.max.apply(Math, ageKVpairs.map(function(ageGroup){ return ageGroup.count; })) + 40;

  var barWidth = width/ageKVpairs.length;

  var groups = d3.select(".chart")
    .selectAll("g")
    .data(ageKVpairs)
    .enter()
    .append("g")
    .attr("transform", (d,i)=>{ return "translate("+i*barWidth+","+(height-(d.count*height/ageMaxHeight))+")" })

  groups.append("rect")
        .attr("width", barWidth - 4)
        .attr("height", (d)=>{ return d.count * height/ageMaxHeight })
        .attr("fill", "red")

  groups.append("text")
    .text(function(d) { return d.age; })
    .attr("x", 2)
    .attr("y", -4)

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
