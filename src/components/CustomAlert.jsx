import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

export const CustomAlert = ({ msg, variant }) => {
  return (
    <Container>
      <Row>
        <Col md={12} className='text-center'>
          <Alert variant={variant}>{msg}</Alert>
        </Col>
      </Row>
    </Container>
  );
};
