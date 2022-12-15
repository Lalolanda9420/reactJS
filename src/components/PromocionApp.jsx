import React from 'react';
import { Col, Container, Image, NavLink, Row } from 'react-bootstrap';

const PromocionApp = () => {
  return (
    <Container fluid className='bg-secondary'>
      <Container className='pt-5'>
        <Row>
          <Col md={6} className='text-center'>
            <Image
              src={'https://i.postimg.cc/D0rzsVx9/preview2.jpg'}
              alt={'Burger King App'}
              width={480}
            />
          </Col>
          <Col md={6} className='d-flex align-items-end'>
            <div>
              <h3 className='fs-1'>
                Descargá la APP y disfrutá mucho más por mucho menos
              </h3>
              <div>
                <NavLink
                  href='https://play.google.com/store/apps'
                  target={'_blank'}
                  rel='noreferrer'
                >
                  <Image
                    src={'https://i.postimg.cc/Sx0XJrDF/google-play.png'}
                    alt={'Android'}
                    width={135}
                  />
                </NavLink>
                <NavLink
                  href='https://www.apple.com/la/app-store/'
                  target={'_blank'}
                  rel='noreferrer'
                >
                  <Image
                    src={'https://i.postimg.cc/gjnw6tCd/app-store.png'}
                    alt={'Apple'}
                    width={135}
                  />
                </NavLink>
              </div>
              <p>
                Apple y el logotipo de Apple son marcas comerciales de Apple
                Inc., registradas en EE. UU. Y otros países. App Store es una
                marca de servicio de Apple Inc. Google Play es una marca
                comercial de Google Inc. Se aplican términos.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PromocionApp;
