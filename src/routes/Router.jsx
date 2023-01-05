import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error404 } from '../components/Error404';
import Footer from '../components/Footer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';
import PromocionApp from '../components/PromocionApp';
import ProductDetail from '../pages/ProductDetail';
import ShopCart from '../pages/ShopCart';
export const Router = () => {
  const errorMsg = 'No se encontraron Productos!';
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={errorMsg} />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<ShopCart />} />
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <div>
        <PromocionApp />
        <Footer />
      </div>
    </>
  );
};
