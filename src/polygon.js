var margin = {top: 20, right: 20, bottom: 30, left: 50},
  width = 600 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var svg = d3.select("main").append("svg")
  .attr("width", innerWidth)
  .attr("height",innerHeight)
.append("g")
  // .attr("transform",
  //       "translate(" + margin.left + "," + margin.top + ")");


var x = d3.scaleLinear().range([0, innerWidth]);
var y = d3.scaleLinear().range([0, innerHeight]);

x.domain([0, innerWidth]);
y.domain([0, innerHeight]);

var point = {"x": 240, "y": 310}

var poly = [
      {"x":0, "y":0},
      {"x":0,"y":100},
      {"x":innerWidth,"y":100},
      {"x":innerWidth,"y":0},
      {"x":innerWidth*2/3,"y":90},
    ];


svg.selectAll("polygon")
  .data([poly])
  .enter()
  .append("polygon")
  .attr("points",function(d) {
      return d.map(function(d) {
          return [x(d.x),y(d.y)].join(",");
      }).join(" ");
  });
