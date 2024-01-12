import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Subscribe from '../components/SubscriberSm.js'
import Foot from '../images/footsm.jpg'
const Footer = () => {
  return (
    <Container>
      <Row className='text-center align-items-center'>
        {/* Column 1: Image */}
        <Col xs='5'>
          <Link className='footerName' to='/'>
            <img src={Foot} style={{ width: '100%' }} />
          </Link>
        </Col>

        {/* Column 2: Follow Us */}
        <Col xs='2'>
          <a className='footerLogo' href="https://www.facebook.com/CarillonCivicAssociation" target="_blank"   rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>

          {/* Add more social media links if needed */}
        </Col>

        {/* Column 3: Email Us */}
        <Col xs='5'>
          <Subscribe />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
