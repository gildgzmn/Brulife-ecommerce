import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/HeroSemi10.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const MenShoes = () => {
  const bannerStyle = {
    height: '50vh',
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    // Implement your logic here to load more products
    console.log('Load more products...');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      {/* Link wrapped around the banner */}
      <Link to="/">
        <div style={bannerStyle}>
          {/* Left arrow button */}
          <Link to="/">
            <button
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'black',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', // Shadow effect
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </Link>
          {/* Right arrow button */}
          <Link to="/">
            <button
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'black',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', // Shadow effect
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Link>
        </div>
      </Link>

      {/* Best Sellers section */}
      <div style={{ marginTop: '20px', position: 'relative' }}>
        <h2>BEST SELLERS</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Example product boxes */}
          {Array.from({ length: 6 }, (_, index) => (
            <div key={`best-seller-${index}`} style={{ width: '150px', height: '150px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* All Products section */}
      <div style={{ marginTop: '20px', position: 'relative' }}>
        <h2>ALL PRODUCTS</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Example product boxes */}
          {Array.from({ length: 8 }, (_, index) => (
            <div key={`all-products-${index}`} style={{ width: '150px', height: '150px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {index + 1}
            </div>
          ))}
        </div>
        <Button style={{ marginTop: '20px' }} onClick={handleLoadMore}>Load More</Button>
      </div>

      {/* Community Reviews section */}
      <div style={{ marginTop: '20px' }}>
        <h2>Community Reviews</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Example review boxes */}
          {Array.from({ length: 3 }, (_, index) => (
            <div key={`community-review-${index}`} style={{ width: '200px', height: '100px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', padding: '10px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenShoes;
