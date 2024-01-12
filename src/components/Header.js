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


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar expand="lg"
      style={{ backgroundColor: '',height:'35vh'  }}
      // sticky="top" 
      className="" >
      <NavbarBrand className=""
        style={{}}
        href="/">
        {/* <img src={backDrop} alt="nucamp logo" className="float-start" style={{ width: '50%' }} /> 
        <h1 className='titleFontWhite' >Carillon Civic Association</h1>*/}
        <h1 className='titleSm' >CARILLON <br/>CIVIC <br/>ASSOCIATION</h1>
      </NavbarBrand> 

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="ms-5 float-start"
        style={{
          color: '#f3f2de', borderRadius: "10px",
          borderColor: '', border: ''
        }} ><i className="fa fa-bars fa-md dark " />
        {/* <h1>=</h1> */}
      </NavbarToggler>

      <Collapse isOpen={menuOpen} navbar>
<Nav className="ms-auto NavTwo" navbar style={{ backgroundColor: '#5a5440', width: '100%', position: 'relative', zIndex: '20' }}>

          <NavItem>
            <NavLink className="nav-link textFontGreenBar  " to="/">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              HOME
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link textFontGreenBar  " to="/member">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              MEMBER
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link textFontGreenBar  " to="/history">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              HISTORY
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link textFontGreenBar  " to="/resources">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              RESOURCES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link textFontGreenBar  " to="/contact">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              CONTACT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link textFontGreenBar  " to="/newsletter">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              NEWSLETTERS
            </NavLink>
          </NavItem>
        </Nav>

      </Collapse>

    </Navbar>
    
  );
};

export default Header;