import React from 'react';
import './header.scss';
import {NavLink, Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo  from '../../assets/images/logo.png';

function Header() {
  return (
        <div className="header">
            <Container>   
                <Row className="header-link">
                    <Col xs={4} className="header-link-logo">
                       <Link to='/'><img src={logo} alt="logo"/></Link> 
                    </Col>
                    <Col xs={8} className="header-link-links">
                        <Col xs={2}>
                            <NavLink exact to="/statistics">Statistics</NavLink>
                        </Col>
                        <Col xs={3}>
                            <NavLink exact to="/pay">Service and Price</NavLink>
                        </Col>
                        <Col xs={2}>
                            <NavLink exact to="/faq">FAQ</NavLink>
                        </Col>
                        <Col xs={2}>
                            <NavLink exact to="/contactUs">Contact Us</NavLink>
                        </Col>
                        <Col xs={3} className="header-link-button-block">
                            <Link className="header-link-button" exact to="/pay">Get a Tip</Link>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
