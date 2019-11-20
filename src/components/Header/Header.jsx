import React from 'react';
import './header.scss';
import {NavLink, Link} from 'react-router-dom';
import {Container } from 'react-bootstrap';
import {Row, Col } from 'antd';
import logo  from '../../assets/images/logo.png';
import background from '../../assets/images/background.jpg';

function Header() {
  return (
        <div className="header">
            <div className="background"><img src={background} alt="bg"/></div>
            <div className="container">   
                <Row type="flex" justify="space-between" align="middle">
                    <Col className="header-link-logo" sm={7}>
                        <Link to='/'><img src={logo} alt="logo"/></Link>
                    </Col>
                    <Col className="header-link-item" sm={2}><NavLink exact to='/'>Home</NavLink></Col>
                    <Col className="header-link-item" sm={3}><NavLink exact to='/statistic'>Statistic</NavLink></Col>
                    <Col className="header-link-item" sm={4}><NavLink exact to='/pay'>Service and Price</NavLink></Col>
                    <Col className="header-link-item" sm={2}><NavLink exact to='/faq'>FAQ</NavLink></Col>
                    <Col className="header-link-item" sm={3}><NavLink exact to='/contactUs'>Contact Us</NavLink></Col>
                    <Col className="header-link-item" sm={3}>
                        <div className="header-link-button"><Link to='/pay'>Get a Tip</Link></div>
                    </Col>
                
                </Row>
            </div>
        </div>
    );
}

export default Header;
