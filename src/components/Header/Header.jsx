import React from 'react';
import './header.scss';
import {NavLink} from 'react-router-dom';
import {Row, Col } from 'antd';

function Header() {
  return (
        <div className="header">
            <div className="container">   
                <Row type="flex" justify="space-between">
                    <Col sm={2}>
                        <NavLink to='/'>Logo</NavLink>
                    </Col>
                    <Col sm={4}><NavLink to='/statistic'>statistic</NavLink></Col>
                    <Col sm={4}><NavLink to='/pay'>pay</NavLink></Col>
                    <Col sm={4}>col-4</Col>
                    <Col sm={4}>col-4</Col>
                    <Col sm={4}>col-4</Col>
                    <Col sm={2}>col-4</Col>
                </Row>
            </div>
        </div>
    );
}

export default Header;
