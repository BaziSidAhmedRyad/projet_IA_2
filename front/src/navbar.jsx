import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample() {
  return (
    <Navbar expand="lg" className="navbarr">
      <Container>
        <Navbar.Brand href="#home">
            BrF
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/749/105/small/gps-map-navigation-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;