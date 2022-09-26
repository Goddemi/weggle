import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import OrderPage from './pages/OrderList/Orderpage';
import ProductList from './pages/ProductList/ProductList';
import ProductRegist from './pages/ProductRegist/ProductRegist';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order-list" element={<OrderPage />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-regist" element={<ProductRegist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
