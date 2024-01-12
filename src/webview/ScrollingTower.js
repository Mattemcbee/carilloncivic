import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import tower2 from '../images/towerscale2.jpg';
import Header from '../components/Header.js';
import HeaderBrand from '../components/HeaderBrand.js';
import HeaderNoBrand from '../components/HeaderNoBrand.js';
import Shape from './Shape.js';

import AboutUsMap from './AboutUsMap.js';
import AboutUsMapSm from './AboutUsMapSm.js';
import Footer from '../components/Footer.js';
import FooterSm from '../components/FooterSm.js';

import '../App.css';

const ScrollingTower = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576); // Adjust the breakpoint as needed
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid style={{ backgroundColor: '', padding: '0' }}>
      {isSmallScreen ? (
        <Container
          fluid
          className='notScroll'
          style={{ paddingBottom: '', padding: '0', overflowX: 'hidden' }}
        >
          <Container fluid className='headerBack'>
            <Col xs='12'>
              <Header />
            </Col>
            <Shape />

          </Container>
          <AboutUsMapSm />
          <Container fluid className='footerBackSm'>
            <FooterSm />
          </Container>
        </Container>
      ) : (
        <Container fluid style={{ padding: '0' }} >
          <Container
            fluid
            className='background-image2'
            style={{
              transform: `translateY(${scrollY * 0.7}px)`,
              overflow: 'hidden',
              padding: '0',
              width:'',
              margin: '0',
              width: '',
              backgroundColor: ''
            }}
          >
<img src={tower2} style={{ width: '100%', maxWidth: '100vw' }} alt='Tower' />
          </Container>

          <div className='front-image' style={{
            top: `${scrollY * -1}px`,
            width:''
            // backgroundColor:'#5a5440' 
          }}>
            <Container fluid className='headerBack'>
              <Col xs='6'>
                <HeaderBrand />
                <HeaderNoBrand />
              </Col>
              <Shape />

            </Container>

            <Container style={{ marginTop: '40px', paddingBottom: '30px' }}>
              <Row>

                <AboutUsMap />
              </Row>
            </Container>

            <Container fluid className='footerBack'>
              <Footer />
            </Container>
          </div>
        </Container >
      )}
    </Container >
  );
};

export default ScrollingTower;
