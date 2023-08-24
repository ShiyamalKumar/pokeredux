import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import ProductDescriptionPage from './pages/ProductDescriptionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListingPage />} />
        <Route path="/pokemon/:id"  element={<ProductDescriptionPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
