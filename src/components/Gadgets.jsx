import React from 'react';
import FeaturedBrands from './FeaturedBrands';
import { Button } from '@/components/ui/button';

const Chocolate = () => {
  // Generate image paths based on your preferred structure
  const getProductImagePath = (index) => `./src/assets/gadgets/phone${index}.png`;

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <img src="./src/assets/HeroSemi5.png" alt="Feastables Logo" className="mx-auto" />
      </div>
      <div className="flex justify-center space-x-4 my-4">
        {/* Featured Brands with customized button class */}
        <FeaturedBrands showHeader={false} buttonClass="custom-button-class" />
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-bold">BEST SELLERS</h2>
        <div className="grid grid-cols-4 gap-4 my-4"> {/* Maintain gap-4 for spacing between image boxes */}
          {[...Array(8)].map((_, index) => (
            <img
              key={index}
              src={getProductImagePath(index + 1)}
              className="w-32 h-48 object-cover mx-auto my-2" // Added my-2 for vertical margin
              alt={`Best Seller ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center my-4">
        <Button>See More</Button>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-bold">ALL PRODUCTS</h2>
        <div className="grid grid-cols-4 gap-4 my-4"> {/* Maintain gap-4 for spacing between image boxes */}
          {[...Array(8)].map((_, index) => (
            <img
              key={index}
              src={getProductImagePath(index + 9)}
              className="w-32 h-48 object-cover mx-auto my-2" // Added my-2 for vertical margin
              alt={`All Product ${index + 9}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center my-4">
        <Button>See More</Button>
      </div>
    </div>
  );
};

export default Chocolate;
