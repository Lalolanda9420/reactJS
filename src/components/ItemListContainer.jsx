import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductsContainer from './Products/ProductsContainer';

const ItemListContainer = () => {
  return (
    <Container>
      <Row>
        <ProductsContainer />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
