import React from 'react';

const Category = ({ imageUrl, categoryName, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-48 h-56 rounded-lg overflow-hidden shadow-lg category-button flex flex-col items-center justify-center"
    >
      <div className="w-full h-full flex flex-col justify-between items-center p-2">
        <img src={imageUrl} alt={categoryName} className="w-full h-auto max-h-40 object-cover" />
        <div className="text-center mt-2">
          <h3 className={`text-xl font-semibold text-${color}`}>{categoryName}</h3>
        </div>
      </div>
    </button>
  );
};

export default Category;
