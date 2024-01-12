import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header.js';
import qr from '../images/qr.png';
import Application from '../images/application.pdf';
import { Container, Col, Row, Button, Img } from 'reactstrap';
import Modal from 'react-modal'; // Import react-modal

const MemberSectionSm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <h1 className='titleFontMemSmWhite text-center'>MemberPage</h1> <br />
      <Container fluid className='infoLeft text-center'>
        <h1 className='titleFontMemSmWhite'>Join Our Community!</h1>
        <h1 className='textFontLeftSm'>
          To become a member, complete a Membership Application by downloading
          this form and following the instructions on the application.
        </h1>
        <Button
          className='buttonRight'
          href={Application}
          style={{ color: '#f3f2de', backgroundColor: '#5a5440' }}
          target='_blank'
          rel='noreferrer'
        >
          Download Form
        </Button>
      </Container>
      <Container fluid className='infoRight text-center'>
        <h1 className='titleFontMemSm'>Current Member</h1>
        <h1 className='textFont'>Pay member fees here</h1>
        <Row>
          <Col>
            <Button
              className='buttonRight text-center'
              style={{ color: '#5a5440', backgroundColor: '#f3f2de' }}
              onClick={openModal}
            >
              Venmo
            </Button>{' '}
          </Col>
          <Col>
            <Button
              className='buttonRight text-center'
              style={{ color: '#5a5440', backgroundColor: '#f3f2de' }}
              href='https://www.paypal.com/donate/?hosted_button_id=Q6G5PPYYPFLVY'
            >
              PayPal
            </Button>
          </Col>
        </Row>
        <h1 className='textFont'>
          {' '}
          If you do not have access to the internet, please contact Pam Smith,
          Membership Chair, at 804-467-7283, for a Membership Application.
        </h1>
      </Container>
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
            backgroundColor: 'white',
          },
        }}
      >
        <div>
          <img src={qr} style={{ width: '100%' }} alt='QR Code' />
          <Button
            className='buttonRight text-center'
            style={{ color: '#5a5440', backgroundColor: '#f3f2de' }}
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default MemberSectionSm;
