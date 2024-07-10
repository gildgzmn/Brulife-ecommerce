import React from 'react';
import HeroSemi3 from '../assets/HeroSemi3.png';
import WomenPerfume from '../assets/WomenPerfume.png';
import PerfumeImage from '../assets/Perfume.png';
import MenPerfume from '../assets/MenPerfume.png';
import Featured1 from '../assets/Featured1.png';
import Featured2 from '../assets/Featured2.png';
import Featured3 from '../assets/Featured3.png';
import { Button } from '@/components/ui/button';

const Perfume = () => {
  const bannerStyle = {
    height: '50vh', // Match the height of the HeroSemi component
    backgroundImage: `url(${HeroSemi3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  return (
    <div className="container mx-auto">
      {/* Top section with banner */}
      <section style={bannerStyle}>
        {/* You can add content here if needed */}
      </section>

      {/* Browse the Range section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6">BROWSE THE RANGE</h2>
        <div className="flex justify-around">
          <div className="w-1/3 bg-white p-4 rounded-md shadow-lg">
            <img
              src={WomenPerfume}
              alt="Women's Perfume"
              className="w-full h-96 object-cover rounded-md"
            />
          </div>
          <div className="w-1/3 bg-white p-4 rounded-md shadow-lg">
            <img
              src={PerfumeImage}
              alt="Perfume"
              className="w-full h-96 object-cover rounded-md"
            />
          </div>
          <div className="w-1/3 bg-white p-4 rounded-md shadow-lg">
            <img
              src={MenPerfume}
              alt="Men's Perfume"
              className="w-full h-96 object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Featured Products section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">FEATURED PRODUCTS</h2>
        <div className="flex justify-around">
          <div className="w-1/3 bg-white p-6 rounded-md shadow-lg">
            <img
              src={Featured1}
              alt="Featured Product 1"
              className="h-64 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold">Alcorae</h3>
            <p className="text-xl">₱999.99</p>
            <p>⭐⭐⭐⭐⭐</p>
            <Button className="mt-4 bg-gray-300" variant="primary">Add to Cart</Button>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-md shadow-lg">
            <img
              src={Featured2}
              alt="Featured Product 2"
              className="h-64 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold">Kleos</h3>
            <p className="text-xl">₱999.99</p>
            <p>⭐⭐⭐⭐⭐</p>
            <Button className="mt-4 bg-gray-300" variant="primary">Add to Cart</Button>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-md shadow-lg">
            <img
              src={Featured3}
              alt="Featured Product 3"
              className="h-64 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold">Drax</h3>
            <p className="text-xl">₱999.99</p>
            <p>⭐⭐⭐⭐⭐</p>
            <Button className="mt-4 bg-gray-300" variant="primary">Add to Cart</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Perfume;
