import React from 'react';
import '../App.css';
import Header from '../components/Header.js'
import RESOURCES from '../text/ResourcesText.js'
import RESOURCEART from '../text/ResourceArt.js'

import art from '../images/art.png'

import { Container, Col, Row, Button } from "reactstrap";

const ResourcesSection = () => {
  return (
    <>
      <Container fluid className='infoRight'
          style={{borderRadius:'0 220px 220px 0'}}
>
        <h1 className='titleFontResourceSm'>Resources </h1>
        <Row>
          <Col xs='12' sm='6'>
            {RESOURCES.map((about, index) => (
              <Col xs='12' sm='' key={index}>
                <h1 className='resourceFont'>{about.website}</h1>
                <br />
              </Col>
            ))}
          </Col>
          <Col xs='12' sm='6' className='text-center'>
            {RESOURCEART.map((about, index) => (
              <Col xs='12' sm='' key={index}>
                <a href={about.website} className='resourceImg'>
                  <img src={about.image} style={{width:'45%'}}  alt={about.name} />
                  <br />
                  <h1 className='resourceFont'>{about.name}</h1>
                </a>
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResourcesSection;
