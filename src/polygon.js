const svg = d3.select("main")
  .append("svg")
  .attr("width", innerWidth)
  .attr("height",innerHeight)


const x = d3.scaleLinear().range([0, innerWidth]);
const y = d3.scaleLinear().range([0, innerHeight]);

x.domain([0, innerWidth]);
y.domain([0, innerHeight]);


const points = [
      {"x":0, "y":0},
      {"x":0,"y":100},
      {"x":innerWidth,"y":100},
      {"x":innerWidth,"y":0},
      {"x":innerWidth*2/3,"y":90},
    ];


const stagePoints = points => points
  .map(point => [x(point.x),y(point.y)].join(','))
  .join(' ')


svg.selectAll("polygon")
  .data([points])
  .enter()
  .append("polygon")
  .attr("points", stagePoints)
