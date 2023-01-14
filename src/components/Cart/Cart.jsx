import React, { useEffect, useState, useContext } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';



const Cart = () => {

  
  const { cart, deleteProductById } = useContext(CartContext)

  return (
    <CardGroup>
      {cart.map((p) => (
        <Card key={p.id} style={{ width: '18rem' }}>
          <Card.Img variant='top' src={p.images[0]} />
          <Card.Body>
            <Card.Title>{p.title}</Card.Title>
            <Card.Subtitle>Cantindad: {p.qty}</Card.Subtitle>
            <Button variant='danger' onClick={() => deleteProductById(p.id)}>
              delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export default Cart;
