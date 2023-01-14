import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart/Cart';

function ShopCart() {

  const navigate = useNavigate();

  return (
    <Container>
      <Cart />
      <Button onClick={() => { navigate('/checkout') }} variant="primary"> Finalizar compra </Button>
    </Container>
  );
}

export default ShopCart;
