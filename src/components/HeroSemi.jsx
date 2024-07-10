import React, { useState, useEffect } from 'react';
import HeroSemi1 from '../assets/HeroSemi1.png';
import HeroSemi2 from '../assets/HeroSemi2.png';
import HeroSemi3 from '../assets/HeroSemi3.png';
import HeroSemi4 from '../assets/HeroSemi4.png';
import HeroSemi5 from '../assets/HeroSemi5.png';
import HeroSemi6 from '../assets/HeroSemi6.png';
import HeroSemi7 from '../assets/HeroSemi7.png';
import HeroSemi8 from '../assets/HeroSemi8.png';
import { Button } from '@/components/ui/button';

const images = [HeroSemi1, HeroSemi2, HeroSemi3, HeroSemi4, HeroSemi5, HeroSemi6, HeroSemi7, HeroSemi8];

const HeroSemi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const heroStyle = {
    height: '50vh',
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // To position the buttons correctly
  };

  return (
    <section style={heroStyle}>
      <Button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors z-10"
        onClick={handlePrev}
        variant="contained" // Adjust the variant and color as needed
        color="primary"
      >
        &lt;
      </Button>
      <Button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors z-10"
        onClick={handleNext}
        variant="contained" // Adjust the variant and color as needed
        color="primary"
      >
        &gt;
      </Button>
    </section>
  );
};

export default HeroSemi;
