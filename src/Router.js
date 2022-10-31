import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductRegist from './ProductRegist/ProductRegist';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductRegist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
