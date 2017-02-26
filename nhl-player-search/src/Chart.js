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
	let agesMap = countAges(players);
	let ageKVpairs = decryptMap(agesMap);

	const margin = {top: 20, left: 50, bottom: 20, right: 20};
  const width = 900 - margin.right - margin.left;
  const height = 500 - margin.top - margin.bottom;

	let x = d3.scaleLinear().range([0, width]);
	let y = d3.scaleLinear().range([height, 0]);

	let svg = d3.select("svg")
							.attr("width", width + margin.left + margin.right)
							.attr("height", height + margin.bottom + margin.top)
							.append("g")
							.attr("transform",
          			"translate(" + margin.left + "," + margin.top + ")");

	ageKVpairs.forEach(el => el.age = +el.age );

	x.domain(d3.extent(ageKVpairs, d =>  d.age));
	y.domain([0, d3.max(ageKVpairs ,d => d.count)])

	let bar = svg.selectAll('.bar')
		.enter().data(ageKVpairs)
		.append("rect")
		.append("g")
		.attr('class', 'bar')
		.attr('x', d => d.age)
		.attr('y', d => d.count)
		.attr('width', width / ageKVpairs.length)
		.attr('height', d => height - y(d.count));

		console.log(bar);

	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x));

	svg.append("g")
		      .call(d3.axisLeft(y));

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
