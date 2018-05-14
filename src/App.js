import React, { Component } from 'react';
import './App.css';
import {Col, Row, Modal, Button} from 'react-materialize'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';
import { select } from 'd3-selection';
import { axisLeft, axisBottom } from 'd3-axis';
import 'd3-transition';


class App extends Component {




  render() {
    return (
      <div className="App">

      {/*  Banner */}


        <section className='banner'>
          <div className='nav bar'>
            <div className='nav logo'>
              @mrkpvlvski
            </div>
            <div className='nav links'>
              <a href="#signup" >Sign Up</a>
              <a href="#login" >Log In</a>
              <a href="#" className='hidden'>Log Out</a>

            </div>
          </div>
          <div>
            <div className='main-container banner-content'>
            <div className='banner-content-left'>
            <h1 className='banner-name'>Mark Pavlovski</h1>
            <h2 className='banner-title'>Web Developer</h2>
            </div>
            <div className='banner-content-right'></div>
            </div>
            <div className='poly-container' id='banner'></div>
          </div>
        </section>

      {/*  About */}


      <section className='about'>
          <div className='main-container about-content'></div>
      </section>
      <div className='poly-container white-to-grey' id='about'></div>


      {/*  Projects */}

      <section className='projects'>
          <div className='main-container projects-content'></div>
      </section>



      </div>
    );
  }

  attachGreyToWhite = selector => {
    const HEIGHT = 60
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
          {"x":window.innerWidth,"y":HEIGHT},
          {"x":window.innerWidth,"y":0},
          {"x":window.innerWidth*2/3,"y":HEIGHT-1},
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
  }


  attachWhiteToGrey = selector => {
    const HEIGHT = 60
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
    window.addEventListener('resize', render)
  }

  componentDidMount = () => {
    this.attachGreyToWhite('.poly-container#banner')
    this.attachWhiteToGrey('.poly-container#about')
  }
}




export default App;
