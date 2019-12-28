import React from 'react';
import { Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap'
import './presentation.css';
import icon from './icon.png';

class AppNav extends React.Component {
    
    render() {
        
    return (
  <div className="Navbar">
  <Navbar variant="dark">
     <img src={icon} className="app-icon" alt="icon"/>
    <Navbar.Brand href="#home">DHIS2 Programs</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
   
  </Navbar>
   
      </div>
    );
  }
}

export default AppNav;