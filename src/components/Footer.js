import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe.js'
import Foot from '../images/foot2.jpg'
const Footer = () => {
  const handleButtonClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  return (
    <Container>
      <Row className='text-center align-items-center'>
        {/* Column 1: Image */}
        <Col xs='4'>
          <Link className='footerName' to='/' onClick={handleButtonClick}>
          <img src={Foot} style={{width:'40%'}}/>
          </Link>
        </Col>

        {/* Column 2: Follow Us */}
        <Col xs='4'>
          <h3 className='footerNameBlank'>
            FOLLOW US:
            <a className='footerName' href="https://www.facebook.com/CarillonCivicAssociation" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook"></i>
</a>

          </h3>
          {/* Add more social media links if needed */}
        </Col>

        {/* Column 3: Email Us */}
        <Col xs='4'>
          <Subscribe />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
