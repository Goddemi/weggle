import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductRegist from './pages/ProductRegist/ProductRegist';

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
