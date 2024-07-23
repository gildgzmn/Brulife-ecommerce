import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PromoBanner from './components/PromoBanner';
import HomePage from './pages/HomePage';

const PromoBannerWrapper = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <PromoBanner />}
    </>
  );
};

function AppRoutes() {
  return (
    <Router>
      <PromoBannerWrapper />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
