import React from 'react';
import { Button } from '@/components/ui/button';

const ChocolateProdDetails = () => {
  const styles = {
    productDetails: {
      fontFamily: 'Arial, sans-serif',
      margin: '80px',
    },
    productName: {
      fontSize: '50px',
      fontWeight : 'bold',
      marginBottom: '20px',
    },
    productHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    productImage: {
      width: '600px',
      height: 'auto',
      marginRight: '20px',
    },
    productInfo: {
      maxWidth: '600px',
    },
    price: {
      fontSize: '24px',
      color: '#b12704',
    },
    rating: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    quantityButton: {
      backgroundColor: 'black',
      border: '1px solid #ccc',
      padding: '5px 10px',
    },
    quantityInput: {
      width: '40px',
      textAlign: 'center',
      margin: '0 5px',
    },
    productDescription: {
      marginBottom: '80px',
      padding: '0 200px',
      fontSize: '20px',
    },
    relatedChocolate: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    chocolateItem: {
      textAlign: 'center',
    },
    chocolateImage: {
      width: '100px',
      height: 'auto',
      marginBottom: '10px',
    },
    relatedTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '32px',
      marginBottom: '40px',
    },
  };

  return (
    <div style={styles.productDetails}>
      <div style={styles.productHeader}>
        <img 
          src="./src/assets/product2.png" 
          alt="Drue Perfume" 
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>DARK CHOCOLATE SEA SALT</h1>
          <p style={styles.price}>₱199.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <div style={styles.quantity}>
            <Button style={styles.quantityButton}>-</Button>
            <input type="text" value="1" readOnly style={styles.quantityInput} />
            <Button style={styles.quantityButton}>+</Button>
          </div>
          <Button style={styles.addToCart}>Add to Cart</Button>
          <Button style={styles.checkout}>Check Out</Button>
        </div>
      </div>
      <p style={styles.productDescription}>
      If you're looking for the simple, yet perfect flavor combination, you've found your new favorite. Made from rich, organic and fair trade dark chocolate, this treat is elevated with a pinch of sea salt which complements the cocoa flavor.
      </p>
      <h2 style={styles.relatedTitle}>R e l a t e d  C h o c o l a t e </h2>
      <div style={styles.relatedChocolate}>
        <div style={styles.chocolateItem}>
          <img src="./src/assets/Chocolate1.png" alt="ALMOND CHOCOLATE" style={styles.chocolateImage} />
          <p>ALMOND CHOCOLATE</p>
          <p style={styles.price}>₱99.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 162</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.chocolateItem}>
          <img src="./src/assets/Chocolate2.png" alt="QUINOA CRUNCH CHOCOLATE" style={styles.chocolateImage} />
          <p>QUINOA CRUNCH CHOCOLATE</p>
          <p style={styles.price}>₱199.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.chocolateItem}>
          <img src="./src/assets/Chocolate3.png" alt="MILK CHOCOLATE" style={styles.chocolateImage} />
          <p>MILK CHOCOLATE</p>
          <p style={styles.price}>₱199.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 805</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ChocolateProdDetails;
