import React from 'react';
import './footer.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoFooter from '../../assets/images/logo-footer.png';




class Footer extends React.Component {


  render () {
    return (
      <div className="footer">
         <Container>
          <Row className="footer-row">
            <Col xs={2} className="footer-row-logo">
              <Link to="/"><img src={logoFooter} alt='logo'/></Link>
            </Col>
            <Col xs={6} className="footer-row-items">
              <Row>
                <Col xs={3}>
                  <Link to="/"><Col xs={12} className="footer-row-items-item"> Home</Col></Link>
                  <Link to="/statistics"><Col xs={12} className="footer-row-items-item">Statistics</Col></Link>
                </Col> 
                <Col xs={5}>
                  <Link to="/pay"><Col xs={12} className="footer-row-items-item">Service and Price</Col></Link>
                  <Link to="/faq"><Col xs={12} className="footer-row-items-item">FAQ</Col></Link>
                </Col> 
                <Col xs={4}>
                  <Link to="/contactUs"><Col xs={12} className="footer-row-items-item">Contact Us</Col></Link>
                  <Link to="/privacy"><Col xs={12} className="footer-row-items-item">Privacy</Col></Link>
                </Col>  
              </Row>
              <Row xs={12}>
                <Col xs={12} className="footer-row-items-item-big"> © 2019, Pilbets. all rights reserved. </Col> 
              </Row> 
            </Col>
            <Col xs={4}>
              <Col xs={12} className="footer-row-items-form">Subscribe</Col>
              
              <form name="contact" action="">
              <Col xs={12}>
                <input className="footer-row-items-form-input" type="text" placeholder="E-Mail"/>
              </Col>
              <Col xs={12}>
                <button className="footer-row-items-form-button">Receive newsletters</button> 
              </Col>
              </form>
              
            </Col>
            
          </Row>
         </Container>
      </div>
    );
  }
 
}

export default Footer;
