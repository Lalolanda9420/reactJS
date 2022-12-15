import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, img, category, id }) => {
  const navigate = useNavigate(); 
  const handleClick = (id) =>{ 
    const path = `/item/${id}`; 
    navigate(path);
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{category?.name}</Card.Subtitle>
        <Button variant='primary' onClick={()=>handleClick(id)}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
