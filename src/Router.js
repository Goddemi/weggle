import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
