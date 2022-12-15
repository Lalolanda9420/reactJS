import React from 'react';
import { Col, Container, Image, NavLink, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className='p-0 bg-dark text-white'>
      <Container className='container py-5 '>
        <hr style={{ color: '#fffff' }} />
        <Row>
          <Col md={6}>
            <Image src={'https://i.postimg.cc/7hY3tNjQ/LOGO.jpg'} alt={'Logo storage footer'} width={192} />
          </Col>
          <Col md={6} className='d-flex justify-content-end'>
            <NavLink
              href={'https://www.facebook.com/#'}
              target={'_blank'}
              className='me-3'
              rel='noreferrer'
            >
              <Image src={'https://i.postimg.cc/X7rFZXWF/SM-RRSS-04.png'} alt='Facebook' width={24} />
            </NavLink>
            <NavLink
              href={'https://www.instagram.com/#'}
              target={'_blank'}
              className='me-3'
              rel='noreferrer'
            >
              <Image src={'https://i.postimg.cc/VsV0c1tN/SM-RRSS-03.png'} alt='Instagram' width={24} />
            </NavLink>
            <NavLink
              href={'https://www.youtube.com/user/#'}
              target={'_blank'}
              className='me-3'
              rel='noreferrer'
            >
              <Image src={'https://i.postimg.cc/yY3g15hy/SM-RRSS-02.png'} alt='YouTube' width={24} />
            </NavLink>
            <NavLink
              href={'https://twitter.com/#'}
              target={'_blank'}
              className='me-3'
              rel='noreferrer'
            >
              <Image src={'https://i.postimg.cc/C5XRCH08/SM-RRSS-01.png'} alt='Twitter' width={24} />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
