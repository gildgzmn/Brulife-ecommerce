import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png';
import product10 from '../assets/product10.png';
import product11 from '../assets/product11.png';
import product12 from '../assets/product12.png';
import { Button } from '@/components/ui/button'; 

const BestSeller = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, imageUrl: product1, name: 'Drue', price: '₱ 999.99', rating: 4.0, path: '/perfume1' },
    { id: 2, imageUrl: product2, name: 'Dark Chocolate Sea Salt', price: '₱ 799.99', rating: 4.0, path: '/chocolate1' },
    { id: 3, imageUrl: product3, name: 'Kaia Neobasics', price: '₱ 1,400.00', rating: 4.0, path: '/shoes1' },
    { id: 4, imageUrl: product4, name: 'Ice Pop', price: '₱ 999.99', rating: 4.0, path: '/beverages1' },
    { id: 5, imageUrl: product5, name: 'LAY\'S® Chile Limón Flavored Potato Chips', price: '₱ 999.99', rating: 4.0, path: '/snacks1' },
    { id: 6, imageUrl: product6, name: 'MX MASTER 3S', price: '₱ 999.99', rating: 4.0, path: '/gadgets1' },
    { id: 7, imageUrl: product7, name: 'Harry Potter American Books', price: '₱ 2999.99', rating: 5.0, path: '/books1' },
    { id: 8, imageUrl: product8, name: 'ZEPHYR LS', price: '₱ 5999.99', rating: 4.0, path: '/shoes2' },
    { id: 9, imageUrl: product9, name: 'Dehydrated Chicken Jerky Dogs Treats', price: '₱ 99.99', rating: 5.0, path: '/petcare1' },
    { id: 10, imageUrl: product10, name: 'Pampers', price: '₱ 399.99', rating: 5.0, path: '/kids1' },
    { id: 11, imageUrl: product11, name: 'Bonakid 3+', price: '₱ 999.99', rating: 5.0, path: '/kids2' },
    { id: 12, imageUrl: product12, name: 'IPhone 15 Pro Max', price: '₱ 99.99', rating: 5.0, path: '/gadgets2' },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="my-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">B E S T S E L L E R S</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-lg overflow-hidden cursor-pointer relative"
            >
              <Link to={product.path}> {/* Wrap with Link component */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                  onClick={() => handleProductClick(product)}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <p className="text-lg font-bold mb-2">{product.name}</p>
                    <p className="text-lg">{product.price}</p>
                    <div className="flex justify-center items-center mt-2">
                      <span className="text-yellow-500 mr-2">{'★'.repeat(Math.floor(product.rating))}</span>
                      <span className="text-white ml-2">({product.rating.toFixed(1)})</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button
            variant="contained" // Assuming 'contained' is a valid variant for Shadcn UI Button
            color="primary" // Adjust the color as needed
            onClick={() => { /* Handle "See More" action here */ }}
            
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
