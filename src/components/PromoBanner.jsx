import React, { useState } from 'react';
import promoImage from '../../src/assets/Hero6.png'; 

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const styles = {
    banner: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    content: {
      backgroundColor: 'white',
      width: '60%',
      display: 'flex',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
    },
    close: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '24px',
      cursor: 'pointer',
    },
    image: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
  };

  return (
    <div style={styles.banner}>
      <div style={styles.content}>
        <div style={styles.close} onClick={handleClose}>×</div>
        <div style={styles.image}>
          <img src={promoImage} alt="Promo" style={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
