import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.scss';


function Home(props) {
  console.log(props)
  return (
    <div className="home">
      <Container>
        <Row className="home-top">
          <Col xs={12} className="home-top-headline">
            Daily Betting Tips
          </Col>
          <Col xs={12} className="home-top-text">
          In this predictions section on our site, you will get the best games to play Over goals each day.
          </Col>
        </Row>
      </Container>
      <div className="container-fluid">
        <Row>
          <Col lg={4} className="home-button">
          <Link className="home-button-link" to="/statistics">
            <div className="home-button-text">
                Go To Statistic
            </div>
            <div className="home-button-arrow">
              <svg width="43" height="14" viewBox="0 0 43 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4444 8.16667H0V5.83333H33.4444V0L43 7L33.4444 14V8.16667Z" fill="#F6F6F6"/>
              </svg>
            </div>
            </Link>
          </Col>          
        </Row>
      </div>  
    </div>
  );
}

export default Home;
