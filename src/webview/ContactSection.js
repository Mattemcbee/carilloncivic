import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header.js'
import Contact from '../text/ContactText.js'

import { Container, Col, Row, Button } from "reactstrap";

const ContactSection = () => {

  return (
    <Container>

      <Row>
        <Col xs={{ size: '12', offset: '' }} md={{ size: '6', offset: '' }}>

          <Container fluid className='infoRight' style={{height:'100%'}}>
            <h1 className='titleFont'>Contact us</h1>
            <h1 className='textFontContact'>Email Us: <a role='link' className='btn btn-link' style={{ fontSize: 'x-large', color: 'inherit' }} href='mailto:tellcca@carilloncivic.org'>
              tellcca@carilloncivic.org
            </a></h1>
            <h1 className='textFontContact'>Arts In The Park Inquiries: <a role='link' className='btn btn-link ' style={{ fontSize: 'x-large', color: 'inherit' }} href='tel:+15403306288'>
              804-220-0833
            </a></h1>
            <h1 className='textFontContact'>Lost and Found Pet Inquiries: <a role='link' className='btn btn-link ' style={{ fontSize: 'x-large', color: 'inherit' }} href='tel:+15403306288'>
              703-964-7749
            </a></h1>
            <h1 className='textFontContact'>Mail Us: P.O. Box 7435, Richmond, VA 23221 </h1>
          </Container>
        </Col>
        <Col xs={{ size: '12', offset: '' }} md={{ size: '6', offset: '' }}>
          <Container fluid className='infoLeft' style={{height:'100%'}}>
            <h1>Submit News:</h1>
            <h1 className='textFontContact2'>
              For the newsletter: Please email all news and updates by the 7th of the month for inclusion in the next edition of the bi-monthly newsletter.
              <br /><br />

              For the weekly email: Please email by Wednesday at noon for that week's email.
              <br /><br />


              For Facebook: Please email whenever news happens and allow 12-24 hours for the item to be posted.

            </h1>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;