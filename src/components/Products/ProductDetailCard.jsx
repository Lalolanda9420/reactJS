import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Button,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import { notify } from './helpers/notify';

function ProductDetailCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((data) => data.json())
      .then((json) => setProduct(json));
  }, [id]);
  
  const redirect = () => {
    const path = `/`;
    navigate(path);
  };
  // const addProductToCart = (product) => {
  //   const cart = JSON.parse(localStorage.getItem('cart')) || [];
  //   const productExist = cart?.some((element) => element.name === id);
  //   if (!productExist) {
  //     cart.push(product);
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //     notify(true);
  //   } else {
  //     notify(false);
  //   }
  // };
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
            <Button onClick={() => navigate('*')}>Add to cart</Button>
          </Col>
        </Row>
      </Container>
      <Toaster />
    </Container>
  );
}

export default ProductDetailCard;
