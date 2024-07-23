import React from 'react';
import { useLocation } from 'react-router-dom';
import PromoBanner from './PromoBanner';

const PromoBannerWrapper = () => {
  const location = useLocation();
  const excludedPaths = ['/login', '/accountsec', '/faq', '/orderhistory', '/vouchers', '/register', '/about', '/allproducts', '/cart'];

  // Check if the current path is not in the excluded paths
  if (!excludedPaths.includes(location.pathname)) {
    return <PromoBanner />;
  }

  return null;
};

export default PromoBannerWrapper;
