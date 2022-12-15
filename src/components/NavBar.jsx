import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container className='mt-2'>
      <Row>
        <Col md={6}>
          <Navbar bg='transparent' variant='light' expand='lg'>
            <Container>
              <Navbar.Brand className='NavLogo'>
                <Link to="/">
              Logoconlink

              </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link href='#home'>Home</Nav.Link>
                  <Nav.Link href='#ofertas'>Ofertas</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col md={6} className='d-flex justify-content-end align-items-center'>
          <CartWidget />
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
