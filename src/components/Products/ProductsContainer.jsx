import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CustomAlert } from '../CustomAlert';

const ProductsContainer = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.escuelajs.co/api/v1/products/?offset=0&limit=10')
      .then((data) => data.json())
      .then((json) => setProducts(json))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
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
