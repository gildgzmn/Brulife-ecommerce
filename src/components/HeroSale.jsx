import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import HeroImage1 from '../assets/HeroSale1.png';
import HeroImage2 from '../assets/HeroSale2.jpg';
import HeroImage3 from '../assets/HeroSale3.jpg';
import HeroImage4 from '../assets/HeroSale4.jpg';
import HeroImage5 from '../assets/HeroSale5.jpg';
import HeroImage6 from '../assets/HeroSale6.jpg';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5, HeroImage6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3500); // Auto scroll every 3.5 seconds (3500 milliseconds)

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [heroImages.length]);

  const nextHero = () => {
    setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  return (
    <div className="relative">
      <div
        className="hero bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${heroImages[currentHeroIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'auto',
          aspectRatio: '1920 / 1080',
        }}
      >
        <Button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 flex items-center"
          onClick={nextHero}
          variant="contained" // Assuming 'contained' is a valid variant for Shadcn UI Button
          color="primary" // Adjust the color as needed
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-lg" /> {/* Right arrow icon */}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
