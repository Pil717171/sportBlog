import React from 'react';
import './statistic.scss';
import { Container, Row, Col } from 'react-bootstrap';

function Statistic() {
  return (
    <div className="statistic">
        <Container>
          <Row className="statistic-block">
            <Col xs={12} lg={9} className="statistic-block-table">
            </Col>
            <Col xs={12} lg={9} className="statistic-block-graph">
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Statistic;
