import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';
import brand6 from '../assets/brand6.png';
import brand7 from '../assets/brand7.png';
import brand8 from '../assets/brand8.png';
import brand9 from '../assets/brand9.png';
import brand10 from '../assets/brand10.png';
import brand11 from '../assets/brand11.png';
import brand12 from '../assets/brand12.png';
import brand13 from '../assets/brand13.png';
import brand14 from '../assets/brand14.png';
import brand15 from '../assets/brand15.png';
import brand16 from '../assets/brand16.png';
import { Button } from '@/components/ui/button'; 

const FeaturedBrands = ({ showHeader = true, buttonClass = '' }) => {
  const brands = [
    { image: brand1, path: '/chocolate' },
    { image: brand2, path: '/beverages' },
    { image: brand3, path: '/perfume' },
    { image: brand4, path: '/gadgets' },
    { image: brand5, path: '/snacks' },
    { image: brand6, path: '/shoes' },
    { image: brand7, path: '/gadgets' },
    { image: brand8, path: '/beverages' },
    { image: brand9, path: '/gadgets' },
    { image: brand10, path: '/chocolate' },
    { image: brand11, path: '/' },
    { image: brand12, path: '/gadgets' },
    { image: brand13, path: '/' },
    { image: brand14, path: '/shoes' },
    { image: brand15, path: '/beverages' },
    { image: brand16, path: '/snacks' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBrands = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const getDisplayedBrands = () => {
    const displayed = [];
    for (let i = 0; i < visibleBrands; i++) {
      displayed.push(brands[(currentIndex + i) % brands.length]);
    }
    return displayed;
  };

  const handleClick = (index) => {
    console.log(`Clicked on brand ${index + 1}`);
  };

  return (
    <section className="py-8 relative">
      {showHeader && <h2 className="text-4xl font-bold mt-4 mb-2 text-center">Featured Brands</h2>}
      <div className="flex justify-center mt-16 relative">
        <div className="grid grid-cols-4 gap-4">
          {getDisplayedBrands().map((brand, index) => (
            <div key={index} className="w-44 p-4 relative">
              <Link to={brand.path}>
                <div
                  className="flex justify-center items-center h-40 p-4 border rounded-lg shadow-lg bg-gray-300 cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => handleClick((currentIndex + index) % brands.length)}
                >
                  <img
                    src={brand.image}
                    alt={`Brand ${index + 1}`}
                    className="max-h-full max-w-full"
                  />
                </div>
              </Link>
              {index === 0 && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 mx-auto mt-2"></div>
              )}
            </div>
          ))}
        </div>
        <Button
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-10 ${buttonClass}`}
          onClick={handlePrev}
        >
          &lt;
        </Button>
        <Button
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-10 ${buttonClass}`}
          onClick={handleNext}
        >
          &gt;
        </Button>
      </div>
    </section>
  );
};

export default FeaturedBrands;
