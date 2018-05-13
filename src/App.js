import React, { Component } from 'react';
import './App.css';
import {Col, Row} from 'react-materialize'
import '../node_modules/font-awesome/css/font-awesome.min.css';



class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='nav bar'>
          <div className='nav logo'>
            <img src={'./assets/nav-logo.png'} className='nav logo image'/>
          </div>
          <div className='nav links'>
            <a>Sign Up</a>
            <a>Log In</a>
          </div>
        </div>

        <div className='banner'></div>

        <div className='main-container'>

          <section className='food-category'>

            <Row>
              <Col s={12}>
                <h1 className='section-title'>
                  Food around the world
                </h1>
              </Col>
            </Row>

            <Row className='card-container'>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>

            </Row>
          </section>

          <section className='food-category'>

            <Row>
              <Col s={12}>
                <h1 className='section-title'>
                  Food around the world
                </h1>
              </Col>
            </Row>

            <Row className='card-container'>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>
              <Col s={6} l={3} xl={3} className='item-card'>
                <img src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
                <h1 className='card-title'>Delicious Snack Title</h1>
                <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
                <div className ='card-stars'>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
                </div><p className = 'card-review-count'>301</p>
              </Col>

            </Row>
          </section>
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
}

export default App;
