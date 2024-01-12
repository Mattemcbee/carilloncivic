import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

// import './Display.js'
// import Display from './Display.js';
// import Header from '../component/Header';
// import Show from './Shows';
import { Container, Col, Row, Button } from "reactstrap";

const AboutUsTest = ({ about, index }) => {
 const handleButtonClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const { id, image, name, text, website, buttons, pic } = about;
  if (id % 2 === 0) {
    return (
      <Container
      // style={{backgroundColor:'red'}}
      >
        <Row >
          <Col xs={{ size: '10', offset: '2' }}>
            <Container fluid
              className='infoRight '
              style={{ padding: '0', 
              // borderRadius:' 0 200px 200px 0'
              // borderRadius:' 12px'
              }}
                    // style={{backgroundColor:'red'}}

            >
              <Row style={{height:'100%', backgroundColor:'',alignItems: 'center' }}>
                              <Col xs='4'>
                  <img src={pic} style={{ width: '100%' }} alt="Tower" />
                </Col>
                <Col xs='8'
                  style={{ padding: '20px' }}
                >
                  <h1 className='textFont'>{name}</h1>
                  <h1 className='textFontSm' >{text}</h1>
                  <Row className="justify-content-center">
                    <Link  to={website} >
                      <Button className='buttonRight' style={{color:"#5a5440", backgroundColor:'#f3f2de'}} href={website} onClick={handleButtonClick}>{buttons}</Button>
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
          <Col xs={{ size: '10', offset: '' }}>
            <Container fluid
              className='infoLeft'
              style={{ padding: '0', 
              // borderRadius:' 200px 0 0 200px '
              }}
            >
              <Row className="justify-content-right" style={{height:'100%', backgroundColor:'',alignItems: 'center' }}>
                <Col className="justify-content-center" xs='8'
                  style={{ padding: '20px' }}
                >
                  <h1 className='textFontLeft'>{name}</h1>
                  <h1 className='textFontLeftSm' >{text}</h1>
                  <Row className="justify-content-center">
                    <Link to={website} >
                      <Button className='buttonLeft ' style={{color:"#f3f2de", backgroundColor:'#5a5440'}} href={website} onClick={handleButtonClick}>{buttons}</Button>
                    </Link>
                  </Row>
                </Col>
                <Col xs='4'>
                  <img src={pic} style={{ width: '100%' }} alt="Tower" />
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