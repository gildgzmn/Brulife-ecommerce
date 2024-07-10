import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedBrands from '../components/FeaturedBrands';
import HeroSemi from '../components/HeroSemi';
import CategoryGrid from '../components/CategoryGrid';
import BestSeller from '../components/BestSeller';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedBrands />
      <HeroSemi />
      <CategoryGrid />
      <BestSeller />
      <Footer />
    </>
  )
}
