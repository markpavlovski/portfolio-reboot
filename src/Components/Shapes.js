import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';
import { select } from 'd3-selection';
import { axisLeft, axisBottom } from 'd3-axis';
import 'd3-transition';


export default Shape = selector => {

  return (
    {const HEIGHT = 60
    const render = () => {

    const container = document.querySelector(selector)
    while (container.firstElementChild) {
      container.removeChild(container.firstElementChild)
    }
    const svg = select(selector)
      .append("svg")
      .attr("width", window.innerWidth)
      .attr("height",HEIGHT)


    const x = scaleLinear().range([0, window.innerWidth]);
    const y = scaleLinear().range([0, HEIGHT]);


    x.domain([0, window.innerWidth]);
    y.domain([0, HEIGHT]);


    const points = [
          {"x":0, "y":0},
          {"x":0,"y":HEIGHT},
          {"x":window.innerWidth*1/3,"y": 0},
          {"x":window.innerWidth,"y":HEIGHT},
          {"x":window.innerWidth,"y":0},
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
    window.addEventListener('resize', render)}
  )
}
