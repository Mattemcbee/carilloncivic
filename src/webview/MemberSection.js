import React, { useState } from 'react';
import Modal from 'react-modal'; // Import react-modal
import '../App.css';
import Header from '../components/Header.js';
import qr from '../images/qr.png';
import Application from '../images/application.pdf';
import { Container, Col, Row, Button } from 'reactstrap';

const MemberSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <h1 className='titleFont text-center'>MemberPage</h1>

      <Container fluid className='memeberPageText memeberHover' style={{ width: '100vw' }}>
        <Row style={{alignItems: 'center'}}>
          <Col xs='6'>
            <h1 className='titleFontGreen'>Join Our Community!</h1>
          </Col>
          <Col xs='3'>
            <h1 className='textFontGreen'>
              To become a member, complete a Membership Application by downloading this form and following the instructions on the application.
            </h1>
          </Col>
          <Col xs='3' className='centerButton '>
            <Button className='buttonRight' href={Application} style={{color:"#f3f2de", backgroundColor:'#5a5440'}} target='_blank' rel='noreferrer'>
              Download Form
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid className='memeberPageTextGreen memeberHover2 ' style={{ width: '100vw' }}>
        <Row style={{alignItems: 'center'}}>
          <Col xs='6'>
            <h1 className='titleFont text-left'>Current <br /> Member</h1>
          </Col>
          <Col xs='3' >
            <h1 className='textFontMember text-left'>
              Pay member fees here
            </h1>
            <h1 className='textFontMember text-left'>
              If you do not have access to the internet, please contact Pam Smith, Membership Chair, at 804-467-7283, for a Membership Application.
            </h1>
          </Col>
          <Col xs='3'
          className='centerButton'>
            <Button className='buttonRight text-center' style={{color:"#5a5440", backgroundColor:'#f3f2de'}} onClick={openModal}>
              Venmo
            </Button>
            <Button className='buttonRight text-center' style={{color:"#5a5440", backgroundColor:'#f3f2de'}} href='https://www.paypal.com/donate/?hosted_button_id=Q6G5PPYYPFLVY'>
              PayPal
            </Button>
          </Col>

        </Row>

      </Container>

      {/* Modal for displaying the image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { zIndex: 1000 },
          content: {
            zIndex: 1001,
            width: '30%', // Adjust the width as needed
            height: 'auto', // Set height to 'auto' or a specific value
            margin: 'auto', // Center the modal horizontally
            backgroundColor: 'white'
          },
        }}
      >
        <div>
          <img src={qr} style={{ width: '100%' }} alt='QR Code' />
          <Button className='buttonRight text-center' style={{color:"#5a5440", backgroundColor:'#f3f2de'}} onClick={closeModal}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default MemberSection;
