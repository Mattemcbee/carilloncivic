import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header.js'
import HISTORY from '../text/HistoryText.js'
import tower from '../images/olddraw2.jpg'

import { Container, Col, Row, Button } from "reactstrap";

const HistorySection = () => {

  return (
    <Container
      style={{ width: '100vw', backgroundColor: '', padding: '0' }}
    >
      <Row style={{ backgroundColor: '' }}>
        <Col xs={{ size: '12', offset: '' }} md={{ size: '6', offset: '' }} style={{ backgroundColor: '', padding: '0', width: '100%' }}>
          <Container fluid className='infoHistory sticky-container'
            style={{ width: '100%', height: '100vh', backgroundColor: '', }}
          >
            <Container fluid style={{ padding: '10px', backgroundColor: '' }}>
              <h1 className='titleFontHistory'>The Virginia World War Memorial Carillon</h1>

              <Row style={{ padding: '', backgroundColor: '', alignItems: 'center' }}>
                <Col xs='8'>
                  <h1 className='textFontMember'>{HISTORY[0].text}</h1>
                </Col>
                <Col xs='4' className="justify-content-center">
                  <img src={tower} style={{ width: '100%', borderRadius: '' }} />
                </Col>
              </Row>
            </Container>
          </Container>
        </Col>
        <Col xs={{ size: '12', offset: '' }} md={{ size: '6', offset: '' }} style={{ backgroundColor: '', padding: '0' }}>
          <Container fluid className='infoLeftHistory'
            style={{ width: '100%', height: '100%', backgroundColor: '' }}>
                            <h1 className='textFontLeft'>{HISTORY[1].name}</h1>

            <Row>
              <Col xs='1'>
                <div className='learnFont' style={{ borderLeft: '2px solid #5a5440', borderTop: '2px solid #5a5440',borderBottom: '2px solid #5a5440', height: '100%', alignItems:'center' }} />
              </Col>
              <Col xs='11'>
                <h1 className='textTimeline' style={{}}>{HISTORY[1].text}</h1>
              </Col>
            </Row>
            <br/>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default HistorySection;