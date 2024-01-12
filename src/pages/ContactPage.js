// import dog from './images/dog.jpg'
// import print from './images/printer issue.PNG'
import tower from '../images/Carillon-scaled.jpeg'
import tower2 from '../images/towerscale2.jpg'
import Header from '../components/Header.js'
// import ShowPage from './ShowPage.js'
// import AboutUs from './AboutUs.js'
import AboutUsMap from '../webview/AboutUsMap.js'
import ContactSection from '../webview/ContactSection.js'
import ContactSectionSm from '../webview/ContactSectionSm.js'

import Footer from '../components/Footer.js';
import HeaderBrand from '../components/HeaderBrand.js';
import HeaderNoBrand from '../components/HeaderNoBrand.js';
import Line from '../webview/Line.js';
import FooterSm from '../components/FooterSm.js';

// import AboutUs2 from './AboutUs2.js'

import { Container, Col, Row, Button } from "reactstrap";



import React, { useState, useEffect } from 'react';
import '../App.css'; // Create this CSS file to style the component

const ContactPage = () => {
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
    <Container fluid style={{ backgroundColor: 'blue', padding: '0' }}>
      {isSmallScreen ? (
        <Container
          fluid
          className='notScroll'
          style={{ marginBottom: '0', padding: '0', overflowX: 'hidden' }}
        >
          <Container fluid className='headerBack'>
            <Col xs='12'>
              <Header />
            </Col>

          </Container>

          <ContactSectionSm />
          <Container fluid className='footerBackSm'>
            <FooterSm />
          </Container>
        </Container>) : (<Container fluid style={{ padding: '0' }}>
          <Container fluid className="background-image2" style={{ transform: `translateY(${scrollY * .5}px)`, overflow: 'hidden', padding: '0', margin: '0', width: '' }}>
            <img src={tower2} style={{ width: '100vw' }} />
          </Container>
          <div
            className="front-image"
            style={{ top: `${scrollY * -1}px` }}>
            <Container fluid className='headerBack'>
              <Col xs='6'>
                <HeaderBrand />
                <HeaderNoBrand />
              </Col>
              <Line />
            </Container>
            <Container style={{ marginTop: '100px' }}>
              <Row>
                <ContactSection />

              </Row>

            </Container>
            <Container fluid style={{ height: '25%' }} />
            <Container fluid className='footerBack' style={{ marginTop: '100px' }}>
              <Footer />
            </Container>
          </div>
        </Container>
      )}
    </Container>
  );
};

export default ContactPage;
