import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header.js'
import NEWSLETTER from '../text/NewsLetterText.js'
import Line from '../webview/Line.js'

import { Container, Col, Row, Button } from "reactstrap";

const NewsLetterSection = () => {

  return (
    <>

      <Container fluid className='infoRight'
        style={{ borderRadius: '0 250px 250px 0' }}
      >
        <Row>
          <Col xs='5'>
            <h1 className='titleFont'>News Letter </h1>

            {NEWSLETTER.map((about, index) => (
              <Col key={index}>
                <h3 ><a className='resourceFont' href={about.website} target="_blank"
                  rel="noreferrer">
                  {about.name}
                </a> <br></br></h3>
              </Col>
            ))}
          </Col>
          <Col xs='7' style={{ alignItems: 'center' }}>
            <Container fluid style={{ backgroundColor: '', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Row style={{ alignItems: 'center' }}>
                <Col xs='3' >
                  <Line />
                </Col>
                <Col xs='6'>
                  <h1 className='learnFont text-center'>Don't Miss What's Happening In The Carillon</h1>
                </Col>
                <Col xs='3'>
                  <Line />

                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewsLetterSection;