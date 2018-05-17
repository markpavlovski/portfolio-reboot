import React, {Component} from 'react';
import './App.css';
import {Col, Row, Modal, Button} from 'react-materialize'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {scaleLinear} from 'd3-scale';
import {line} from 'd3-shape';
import {select} from 'd3-selection';
import {axisLeft, axisBottom} from 'd3-axis';
import 'd3-transition';


class App extends Component {

  render() {
    return (<div className="App">

      {/* Banner */}

      <section className='banner s-grey'>
        <div className='nav bar'>
          <div className='nav logo'>
            @mrkpvlvski
          </div>
          <div className='nav links'>
            <a href="https://www.linkedin.com/in/markpavlovski" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/mrkpvlvski" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/mrkpvlvski" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="far fa-envelope"></i>
            </a>

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

      {/* About */}

      <section className='about s-white'>
        <div className='main-container about-content'>
          <h1 className='section-title title-right'>Skills / Interests</h1>

          <Row className='skills-icons'>
            <Col s={4} l={2}>
              <i className="fab fa-js"></i>
            </Col>
            <Col s={4} l={2}>
              <i className="fab fa-node-js"></i>
            </Col>
            <Col s={4} l={2}>
              <i className="fab fa-react"></i>
            </Col>
            <Col s={4} l={2}>
              <i className="fas fa-database"></i>
            </Col>
            <Col s={4} l={2}>
              <i className="fab fa-python"></i>
            </Col>
            <Col s={4} l={2}>
              <i className="fab fa-git-square"></i>
            </Col>
          </Row>
          <Row className='intro-text-container'>
            <Col s={12} m={6}>
              <h4 className='intro-text'>
                Hello, I'm Mark. I'm a full stack Web Developer based in Seattle, WA.
              </h4>
            </Col>
          </Row>
          <Row className='intro-text-container'>
            <Col s={12} m={6}>
              <h4 className='intro-text'></h4>
            </Col>
            <Col s={12} m={6}>
              <h4 className='intro-text'>
                I'm passionate about building beautiful, data-driven apps that solve real world problems.
              </h4>
            </Col>
          </Row>
          <Row className='intro-text-container'>
            <Col s={12} m={6}>
              <h4 className='intro-text'>
                My goal is to contribute to innovative projects and push the limits of technology.
              </h4>
            </Col>
          </Row>

        </div>
      </section>
      <div className='poly-container white-to-grey' id='about'></div>

      {/* Projects */}

      <section className='projects s-grey'>
        <div className='main-container projects-content'>
          <h1 className='section-title title-left'>Recent Projects</h1>

          <Row className='project-card left'>
            <Col s={12} l={6}>
              <div className='project-card-visual mt-st-helens'></div>
            </Col>
            <Col s={12} l={6}>
              <div className='project-card-content'>
                <h1 className='project-card-title'>Elevations</h1>

                <p className='project-card-description'>
                  Lorem ipsum dolor sit amet, esse graeco tractatos no has. No vel sumo oportere prodesset. In mei congue tamquam. Probatus suavitate sed te, no vix paulo congue euripidis. Qui meis solet ea, noster partiendo vulputate qui te.
                </p>

                <p className='project-card-links'>
                  Links:
                </p>
                <p>
                  <a href=''>
                    Deployed App</a><br/>
                  <a href=''>
                    GitHub Front End</a><br/>
                  <a href=''>
                    GitHub Back End</a>
                </p>
              </div>
            </Col>
          </Row>

          <Row className='project-card right'>

            <Col s={12} l={6}>
              <div className='project-card-content'>
                <h1 className='project-card-title'>Proximity</h1>

                <p className='project-card-description'>
                  Lorem ipsum dolor sit amet, esse graeco tractatos no has. No vel sumo oportere prodesset. In mei congue tamquam. Probatus suavitate sed te, no vix paulo congue euripidis. Qui meis solet ea, noster partiendo vulputate qui te.
                </p>

                <p className='project-card-links'>
                  Links:
                </p>
                <p>
                  <a href=''>
                    Deployed App</a><br/>
                  <a href=''>
                    GitHub Front End</a><br/>
                  <a href=''>
                    GitHub Back End</a>
                </p>
              </div>
            </Col>
            <Col s={12} l={6}>
              <div className='project-card-visual proximity'></div>
            </Col>
          </Row>

          <Row className='project-card left snacks'>
            <Col s={12} l={6}>
              <div className='project-card-visual snacks'></div>
            </Col>
            <Col s={12} l={6}>
              <div className='project-card-content'>
                <h1 className='project-card-title'>Snack Review</h1>

                <p className='project-card-description'>
                  Lorem ipsum dolor sit amet, esse graeco tractatos no has. No vel sumo oportere prodesset. In mei congue tamquam. Probatus suavitate sed te, no vix paulo congue euripidis. Qui meis solet ea, noster partiendo vulputate qui te.
                </p>

                <p className='project-card-links'>
                  Links:
                </p>
                <p>
                  <a href=''>
                    Deployed App</a><br/>
                  <a href=''>
                    GitHub Front End</a><br/>
                  <a href=''>
                    GitHub Back End</a>
                </p>
              </div>
            </Col>
          </Row>

          <h1 className='section-title title-center small'><a href=''>Visit Github for more projects</a></h1>



        </div>
      </section>
      <div className='poly-container grey-to-white' id='projects'></div>

      {/* Contact */}

      <section className='contact s-white'>
        <div className='main-container contact-content'></div>
      </section>

    </div>);
  }

  attachGreyToWhite = selector => {
    const HEIGHT = 60
    const render = () => {

      const container = document.querySelector(selector)
      while (container.firstElementChild) {
        container.removeChild(container.firstElementChild)
      }
      const svg = select(selector).append("svg").attr("width", window.innerWidth).attr("height", HEIGHT)

      const x = scaleLinear().range([0, window.innerWidth]);
      const y = scaleLinear().range([0, HEIGHT]);

      x.domain([0, window.innerWidth]);
      y.domain([0, HEIGHT]);

      const points = [
        {
          "x": 0,
          "y": 0
        }, {
          "x": 0,
          "y": HEIGHT
        }, {
          "x": window.innerWidth,
          "y": HEIGHT
        }, {
          "x": window.innerWidth,
          "y": 0
        }, {
          "x": window.innerWidth * 2 / 3,
          "y": HEIGHT - 1
        }
      ];

      const stagePoints = points => points.map(point => [
        x(point.x),
        y(point.y)
      ].join(',')).join(' ')

      svg.selectAll("polygon").data([points]).enter().append("polygon").attr("points", stagePoints)
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
      const svg = select(selector).append("svg").attr("width", window.innerWidth).attr("height", HEIGHT)

      const x = scaleLinear().range([0, window.innerWidth]);
      const y = scaleLinear().range([0, HEIGHT]);

      x.domain([0, window.innerWidth]);
      y.domain([0, HEIGHT]);

      const points = [
        {
          "x": 0,
          "y": 0
        }, {
          "x": 0,
          "y": HEIGHT
        }, {
          "x": window.innerWidth * 1 / 3,
          "y": 0
        }, {
          "x": window.innerWidth,
          "y": HEIGHT
        }, {
          "x": window.innerWidth,
          "y": 0
        }
      ];

      const stagePoints = points => points.map(point => [
        x(point.x),
        y(point.y)
      ].join(',')).join(' ')

      svg.selectAll("polygon").data([points]).enter().append("polygon").attr("points", stagePoints)
    }
    render()
    window.addEventListener('resize', render)
  }

  attachMtStHelens = selector => {
    console.log('hi');
  }




  componentDidMount = () => {
    this.attachGreyToWhite('.poly-container#banner')
    this.attachWhiteToGrey('.poly-container#about')
    this.attachGreyToWhite('.poly-container#projects')
    this.attachMtStHelens('.mt-st-helens')
  }
}

export default App;
