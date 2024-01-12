import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

// import './Display.js'
// import Display from './Display.js';
// import Header from '../component/Header';
// import Show from './Shows';
import { Container, Col, Row, Button } from "reactstrap";

const AboutUsTest = ({ about, index }) => {


  const { id, image, name, text, website, buttons, pic } = about;
  if (id % 2 === 0) {
    return (
      <Container
        style={{ backgroundColor: '', padding: '', margin: '0' }}
      >
        <Row >
          <Col xs='12'>
            <Container fluid
              className='infoRightSm '
              style={{
                padding: '0',
                // borderRadius:' 0 200px 200px 0'
                // borderRadius:' 12px'
              }}
            // style={{backgroundColor:'red'}}

            >
              <Row style={{ height: '100%', backgroundColor: '', alignItems: 'center', paddingRight: '20px' }}>

                <Col xs='8'
                  style={{ padding: '20px' }}
                >
                  <h1 className='textFont'>{name}</h1>
                  <h1 className='textFontSm' >{text}</h1>

                </Col>
                <Col xs='4'>
                  <Row className="justify-content-center">
                    <Link to={website} >
                      <Button className='buttonRight' style={{ color: "#5a5440", backgroundColor: '#f3f2de' }} href={website}>{buttons}</Button>
                    </Link>
                  </Row>
                </Col>

              </Row>

            </Container>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container
      // style={{backgroundColor:'red'}}
      >
        <Row>
          <Col xs='12'>
            <Container fluid
              className='infoRightSm'
              style={{
                padding: '0',
                // borderRadius:' 200px 0 0 200px '
              }}
            >
              <Row style={{ height: '100%', backgroundColor: '', alignItems: 'center', paddingLeft: '20px' }}>
                <Col xs='4'>
                  <Row className="justify-content-center">
                    <Link to={website} >
                      <Button className='buttonRight ' style={{ color: "#5a5440", backgroundColor: '#f3f2de' }} href={website}>{buttons}</Button>
                    </Link>
                  </Row>
                </Col>
                <Col className="justify-content-center" xs='8'
                  style={{ padding: '20px' }}
                >
                  <h1 className='textFont'>{name}</h1>
                  <h1 className='textFontSm' >{text}</h1>

                </Col>
                
              </Row>

            </Container>
          </Col>
        </Row>
      </Container>

    );
  }
};

export default AboutUsTest;