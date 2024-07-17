import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/Category1.png';
import img2 from '../assets/Category2.png';
import img3 from '../assets/Category3.png';
import img4 from '../assets/Category4.png';
import img5 from '../assets/Category5.png';
import img6 from '../assets/Category6.png';
import img7 from '../assets/Category7.png';
import img8 from '../assets/Category8.png';
import img9 from '../assets/Category9.png';

const CategoryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, imageUrl: img1, categoryName: 'PERFUME', color: 'black', path: '/perfume' },
    { id: 2, imageUrl: img2, categoryName: 'CHOCOLATE', color: 'black', path: '/chocolate' },
    { id: 3, imageUrl: img3, categoryName: 'GADGETS', color: 'black', path: '/gadgets' },
    { id: 4, imageUrl: img4, categoryName: 'SHOES', color: 'black', path: '/shoes' },
    { id: 5, imageUrl: img5, categoryName: 'SNACKS', color: 'black', path: '/snacks' },
    { id: 6, imageUrl: img6, categoryName: 'BEVERAGES', color: 'black', path: '/beverages' },
    { id: 7, imageUrl: img7, categoryName: 'BABIES & KIDS', color: 'black', path: '/babies-kids' },
    { id: 8, imageUrl: img8, categoryName: 'BOOKS', color: 'black', path: '/books' },
    { id: 9, imageUrl: img9, categoryName: 'PET CARE', color: 'black', path: '/pet-care' },
  ];

  return (
    <section className="my-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">C A T E G O R I E S</h2>
        <div className="grid grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.path} className="border rounded-lg overflow-hidden cursor-pointer relative">
              <img
                src={category.imageUrl}
                alt={category.categoryName}
                className="w-full h-60 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-3xl font-bold text-white">{category.categoryName}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
