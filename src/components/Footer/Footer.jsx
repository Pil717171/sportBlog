import React from 'react';
import './footer.scss';
import { Row, Col } from 'antd';
import { Container } from 'react-bootstrap';
import logoFooter from '../../assets/images/logo-footer.png';




class Footer extends React.Component {

  componentWillMount() {
    console.log(123)
    console.log(document.body.height)
  }

  render () {
    return (
      <div className="footer">
         <Container>
          <Row>
            <Col xs={4} className="footer-blocks">
              <div className="logo"><img src={logoFooter} alt="logo"/></div>
            </Col>
            <Col xs={12} className="footer-blocks">
              <Col xs={8}> 
                <Col xs={24}>Home</Col>
                <Col xs={24}>Statistics</Col>
              </Col>
              <Col xs={8}> 
                <Col xs={24}>Service and Price</Col>
                <Col xs={24}>FAQ</Col>
              </Col>
              <Col xs={8}> 
                <Col xs={24}>Contact Us</Col>
                <Col xs={24}>Privacy</Col>
              </Col>
              <Col xs={24}>
                © 2019, Pilbets. all rights reserved.
              </Col>
            </Col>
            <Col xs={8} className="footer-blocks">
              
            </Col>
            </Row>
         </Container>
      </div>
    );
  }
 
}

export default Footer;
