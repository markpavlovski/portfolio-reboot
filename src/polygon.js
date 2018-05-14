const HEIGHT = 60

const render = () => {

const container = document.querySelector('.poly-container#banner')
while (container.firstElementChild) {
  container.removeChild(container.firstElementChild)
}
const svg = d3.select(".poly-container#banner")
  .append("svg")
  .attr("width", innerWidth)
  .attr("height",HEIGHT)


const x = d3.scaleLinear().range([0, innerWidth]);
const y = d3.scaleLinear().range([0, HEIGHT]);


x.domain([0, innerWidth]);
y.domain([0, HEIGHT]);


const points = [
      {"x":0, "y":0},
      {"x":0,"y":HEIGHT},
      {"x":innerWidth,"y":HEIGHT},
      {"x":innerWidth,"y":0},
      {"x":innerWidth*2/3,"y":HEIGHT-1},
    ];


const stagePoints = points => points
  .map(point => [x(point.x),y(point.y)].join(','))
  .join(' ')


svg.selectAll("polygon")
  .data([points])
  .enter()
  .append("polygon")
  .attr("points", stagePoints)
}

render()

window.addEventListener('resize', render)
