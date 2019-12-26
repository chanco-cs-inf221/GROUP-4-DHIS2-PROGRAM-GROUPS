import React from 'react';
import { Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap'
import './CardStyle.css';

const AppNav = () => {
  return (
  <div>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
</div>
  )
};

export default AppNav;