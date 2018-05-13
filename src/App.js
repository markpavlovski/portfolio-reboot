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

        {/* This Section is For the Front Page*/}

        {/*
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
        */}


        {/* This Section is For the Item Page*/}

        <div className='main-container-item'>

          <section className='food-category'>

            <Row>

              <Col s={12} m={7}  className='item-page-item-card'>
                <h1 className='item-page-card-title'>Delicious Snack Title</h1>
                <h2 className='item-page-card-short-description'>Delicious Snack Short Descripion</h2>


                <p className='item-page-card-full-description'>
                Lorem ipsum dolor amet meggings locavore polaroid synth kale chips. Ethical forage keffiyeh meh sriracha snackwave. YOLO listicle biodiesel cornhole cray authentic ethical jianbing poke pickled activated charcoal literally farm-to-table. Semiotics fam waistcoat tousled, gastropub next level shaman kale chips chicharrones narwhal XOXO put a bird on it shoreditch master cleanse. Mixtape street art godard food truck post-ironic kickstarter. 8-bit mustache selvage shoreditch cred brooklyn gastropub waistcoat wayfarers craft beer food truck godard. Live-edge sustainable cardigan kickstarter enamel pin literally art party hella thundercats post-ironic hell of brunch irony roof party.
                 </p>

                 <div class='item-page-reviews-container'>
                   <p className = 'item-page-card-review-count'>301 Reviews</p>
                   <div className ='item-page-card-stars'>
                     <i className="fas fa-star" />
                     <i className="fas fa-star" />
                     <i className="fas fa-star" />
                     <i className="fas fa-star-half" />
                   </div>
                 </div>

              </Col>
              <Col s={12} m={5}>
                <div className='message-box'></div>
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
