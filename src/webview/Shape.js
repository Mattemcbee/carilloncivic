import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Tower from '../images/towerold3.jpg';

const Shape = () => {
  return (
    <>
      <Container className=' text-center' style={{ height: '54vh', marginBottom: '', backgroundColor: '', paddingBotom: '0' }}>
        <div className='learnFont' style={{ borderBottom: '2px solid', width: '100%', margin: '', marginBottom: '40px' }} />
        <Row className='text-center' style={{ alignItems: 'center' }}>
          <Col xs='12' md='5'>
            <h1 className='learnFont4'>“It’s a destination…. It’s quiet and beautiful.”</h1>
            <h1 className='learnFont3'>-Mary Ellen Connell</h1>
          </Col>
          <Col xs={{ size: '6', offset: '3' }} md={{ size: '2', offset: '0' }}>
            <img src={Tower} style={{ width: '100%', borderRadius: '500px' }} alt='Tower' />
          </Col>
          <Col xs='12' md='5'>
            <h1 className='learnFont'>Richmond, VA</h1>
            <h1 className='learnFont3'>Founded 1968</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: '', height: '11vh', marginBottom: '', alignItems: 'center' }} className='text-center'>
        <Row className='text-center' style={{ alignItems: 'center' }}>
          <Col xs='7' md='8'>
            <div className='learnFont' style={{ borderBottom: '2px solid', width: '100%', margin: '', marginBottom: '' }} />
          </Col>
          <Col xs='3' md='3'>
            <h1 className='learnFont2' style={{ alignSelf: 'flex-end', marginBottom: '' }}> Learn More </h1>
          </Col>
          <Col xs='2' md='1'>
            <div className='learnFont' style={{ borderBottom: '2px solid', width: '100%', margin: '', marginBottom: '' }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shape;
