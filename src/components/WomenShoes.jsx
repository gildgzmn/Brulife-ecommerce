import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/HeroSemi9.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import both arrow icons

const WomenShoes = () => {
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

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <Link to="/">
        <div style={bannerStyle}>
          {/* Button with > icon */}
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
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} /> {/* Right arrow icon */}
          </button>
          {/* Button with < icon */}
          <button
            style={{
              position: 'absolute',
              left: '10px', // Opposite side of the > button
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'black',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              borderRadius: '50%',
              padding: '10px',
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} /> {/* Left arrow icon */}
          </button>
        </div>
      </Link>
      {/* Rest of your content */}
    </div>
  );
};

export default WomenShoes;
