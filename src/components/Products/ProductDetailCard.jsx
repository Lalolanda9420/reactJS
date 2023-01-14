import React, { useEffect, useState } from 'react';
import {
  Button,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import { getItemById } from '../../helpers/firestore.controllers';

function ProductDetailCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getItemById(id,'products').then( resp => setProduct(resp))
  }, [id]);
  
  const redirect = () => {
    const path = `/`;
    navigate(path);
  };

  return (
    <Container className='p-5'>
      <Row className='mb-5'>
        <Col>
          <Button variant='secondary' onClick={redirect}>
            Back to storage
          </Button>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <Carousel>
              {product?.images.map((e, i) => (
                <Carousel.Item key={i}>
                  <Image
                    className='d-block w-100'
                    src={e}
                    alt={`Slide number ${i}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col>
            <h1 className='card-title'>{product?.title}</h1>
            <Link to='*'>
              <h6>{product?.category?.name}</h6>
            </Link>
            <span>{`Price: $${product?.price}`}</span>
            <p>{product?.description}</p>
            <ItemCount product={product} stock={10} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProductDetailCard;
