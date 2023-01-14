import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { getTotalItems } from '../helpers/calculatorFunction';
import cartIcon from '../assets/images/basket.svg';

const CartWidget = ({cart}) => {

  const navigate = useNavigate();

  return (
    <Button 
      className='position-relative' 
      variant='dark'
      onClick={ ()=>{ navigate('/cart') } }
      >
      <Image src={cartIcon} alt={'Carrito'} width={24} />
      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
        { getTotalItems(cart) }
      </span>
    </Button>
  );
};

export default CartWidget;
