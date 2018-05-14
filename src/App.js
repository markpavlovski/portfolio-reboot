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



        <div className='banner'>
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

            </div>
            <div className='poly-container' id='banner'></div>
          </div>
        </div>

        {/* This Section is For the Front Page*/}

        <div className='main-container'>

          <section className='footer'>

            <Row >
              <Col s={12}>
                <div className='footer-block'></div>
                <p>2018 © Snacks, Inc.</p>
              </Col>
            </Row>


          </section>
        </div>




      </div>
    );
  }

  componentDidMount = () => {

    const HEIGHT = 60
    const render = () => {

    const container = document.querySelector('.poly-container#banner')
    while (container.firstElementChild) {
      container.removeChild(container.firstElementChild)
    }
    const svg = select(".poly-container#banner")
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
}




export default App;
