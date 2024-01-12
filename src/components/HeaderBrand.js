import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Button,
  Modal,
  Label,
  FormGroup,
  ModalHeader, ModalBody
} from "reactstrap";
import TestPage from '../Test.js';

// import { Formik, Field, Form, ErrorMessage } from 'formik';

import { NavLink } from "react-router-dom";
// import hatLogo from "../app/assets/img/hatLogo.jpg";
// import backDrop from "../app/assets/img/logoM.jpg";

// import LoginForm from "./LoginForm";
// import UserLoginForm from "../features/user/UserLoginForm";

import React from 'react';
// import { HashLink } from 'react-router-hash-link';


const HeaderBrand = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar expand="lg"
      style={{ backgroundColor: '', height:'20vh' }}
      // sticky="top" 
      className="" >
      <NavbarBrand className=""
        style={{}}
        href="/">
        {/* <img src={backDrop} alt="nucamp logo" className="float-start" style={{ width: '50%' }} /> 
        <h1 className='titleFontWhite' >Carillon Civic Association</h1>*/}
        <h1 className='titleFontWhite' >CARILLON CIVIC ASSOCIATION</h1>
      </NavbarBrand> 
    </Navbar>
  );
};

export default HeaderBrand;