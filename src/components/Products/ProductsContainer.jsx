import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CustomAlert } from '../CustomAlert';
import  { getItem } from '../../helpers/firestore.controllers';
 
import { createItem, getItems } from '../../helpers/firestore.controllers';

const ProductsContainer = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getItems('products')
      .then( resp => setProducts(resp));
  }, []);

  return isLoading ? (
    <CustomAlert msg={'Loading...'} variant={'info'} />
  ) : !products ? (
    <CustomAlert msg={'No data'} variant={'warning'}/>
  ) : (
    <>
      {products?.map((p) => (
        <Col key={p.id}>
          <ProductCard
            id={p.id}
            name={p.title}
            img={p.images}
            category={p.category}
          />
        </Col>
      ))}
    </>
  );
};

export default ProductsContainer;
