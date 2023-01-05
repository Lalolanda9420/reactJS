import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const { cart } = useContext( CartContext );

  return (
    <Container className='mt-2'>
      <Row>
        <Col md={6}>
          <Navbar bg='transparent' variant='light' expand='lg'>
            <Container>
              <Navbar.Brand className='NavLogo'>
                <Link to="/">
                  <img className='logo-container' src={'https://i.postimg.cc/7hY3tNjQ/LOGO.jpg'} alt="" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                  <Link to='/'>Home</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col md={6} className='d-flex justify-content-end align-items-center'>
          <CartWidget cart={cart} />
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
