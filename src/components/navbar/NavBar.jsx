import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import {NavLink} from 'react-router-dom'
function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Gamesdot.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' >Dot.com</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/Ps5'>Ps5</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/Xbox'>Xbox</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/PreOrder'>PreOrder</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink to='/cart' className="text-decoration-none">
            <CartWidget counter={369}/>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;