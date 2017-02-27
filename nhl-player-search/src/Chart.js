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
	let agesMap = countAges(players);
	let ageKVpairs = decryptMap(agesMap);
	let filtered = ageKVpairs.filter(el => el.age ? el.age : "");
	const margin = {top: 20, left: 50, bottom: 20, right: 20};
	const width = 800 - margin.right - margin.left;
	const height = 400 - margin.top - margin.bottom;

	let x = d3.scaleLinear().range([0, width]);
	let y = d3.scaleLinear().range([height, 0]);


	x.domain(d3.extent(filtered, d =>  d.age ));
	y.domain([0, d3.max(filtered, d => d.count)]);

	d3.select('.chart').remove();


	let svg = d3.select("body").append('svg')
							.attr('class', 'chart')
							.attr("width", width + margin.left + margin.right)
							.attr("height", height + margin.bottom + margin.top)
							.append("g")
							.attr("transform",
          			"translate(" + margin.left + "," + margin.top + ")");

	x.domain(d3.extent(filtered, d =>  d.age ));
	y.domain([0, d3.max(filtered, d => d.count)]);

	let bar = svg.selectAll('.bar')
		.data(filtered).enter()
		.append("rect")
		.attr('class', 'bar')
		.attr('x', d => x(d.age) )
		.attr('y', d => y(d.count))
		.attr('width', width / filtered.length)
		.attr('height', d => height - y(d.count));

	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x).ticks(filtered.length - 1));

	svg.append("g")
		      .call(d3.axisLeft(y));

}


function initializeChart(players) {
	let agesMap = countAges(players);
	let ageKVpairs = decryptMap(agesMap);

	const margin = {top: 20, left: 50, bottom: 20, right: 20};
  const width = 800 - margin.right - margin.left;
  const height = 400 - margin.top - margin.bottom;

	let x = d3.scaleLinear().range([0, width]);
	let y = d3.scaleLinear().range([height, 0]);

	let svg = d3.select("svg")
							.attr("width", width + margin.left + margin.right)
							.attr("height", height + margin.bottom + margin.top)
							.append("g")
							.attr("transform",
          			"translate(" + margin.left + "," + margin.top + ")");

	x.domain(d3.extent(ageKVpairs, d =>  d.age ));
	y.domain([0, d3.max(ageKVpairs, d => d.count)]);

	let bar = svg.selectAll('.bar')
		.data(ageKVpairs).enter()
		.append("rect")
		.attr('class', 'bar')
		.attr('x', d => x(d.age))
		.attr('y', d => y(d.count))
		.attr('width', width / ageKVpairs.length)
		.attr('height', d => height - y(d.count));

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
      age: +key,
      count: agesMap[key]
    })
  }
  return kvpairs;
}

function countAges(players){
  return players.map(player => player.player.Age)
  .reduce((map, age) => {
			map[age] = map[age] && age != undefined ? ++map[age] : 1
	    return map
  }, {});
}


export default Chart;
