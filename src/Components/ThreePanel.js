import React, { Component } from 'react';
import { Container, Row, Col, OverlayTrigger, Overlay, Tooltip } from 'react-bootstrap';
import '../index.css';
import './ThreePanel.css';

class ThreePanel extends Component {
  render() {
    return (
      <Container>
        {/* {['left', 'center', 'right'].map(placement => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={<Tooltip id={`tooltip-${placement}`}> Information on a good pupper. </Tooltip>}
          > */}
        <Row center>
          <Col className='col'> <img center src='https://i.ebayimg.com/images/g/lL8AAOSw-ypbmcBb/s-l300.jpg' /></Col>
          <Col className='col'> <img center src='http://dachshundtreasures.com/images/colors/11301005.jpg' /></Col>
          <Col className='col'> <img center src='http://dogbuns.com/Rocky.jpg' /></Col>
        </Row>
        {/* </OverlayTrigger>
    ))
  } */}
      </Container>

    );
  }
}

export default ThreePanel;