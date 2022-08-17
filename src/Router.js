import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import OrderList from './pages/OrderList/OrderList';
import ProductList from './pages/ProductList/ProductList';
import ProductRegist from './pages/ProductRegist/ProductRegist';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-regist" element={<ProductRegist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
