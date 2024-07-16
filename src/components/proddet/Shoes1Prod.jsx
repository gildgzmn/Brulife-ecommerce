import React from 'react';
import { Button } from '@/components/ui/button';

const ShoesProdDetails = () => {
  const styles = {
    productDetails: {
      fontFamily: 'Arial, sans-serif',
      margin: '80px',
    },
    productName: {
      fontSize: '40px',
      fontWeight : 'bold',
      marginBottom: '20px',
    },
    productHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    productImage: {
      width: '350px',
      height: 'auto',
      marginRight: '20px',
      marginLeft: '200px',
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
    relatedShoes: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    shoesItem: {
      textAlign: 'center',
    },
    shoesImage: {
      width: '300px',
      height: 'auto',
      marginBottom: '10px',
      marginLeft: '30px',
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
          src="./src/assets/product3.png" 
          alt="Shoes" 
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>KAIA NEOBASICS</h1>
          <p style={styles.price}>₱5999.99</p>
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum tempor quam, non ornare lorem sollicitudin vitae. Pellentesque nec dolor eget mauris efficitur hendrerit. Sed ac pharetra nunc, eu vestibulum odio. Morbi hendrerit pharetra ante convallis cursus. Sed ultricies ligula a dictum finibus. Nulla ullamcorper faucibus justo, non placerat ligula.
      </p>
      <h2 style={styles.relatedTitle}>R e l a t e d  S h o e s</h2>
      <div style={styles.relatedShoes}>
        <div style={styles.shoesItem}>
          <img src="./src/assets/Soleil.png" alt="SOLEIL" style={styles.shoesImage} />
          <p>SOLEIL</p>
          <p style={styles.price}>₱1999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 162</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.shoesItem}>
          <img src="./src/assets/Chocolate2.png" alt="SHOES" style={styles.shoesImage} />
          <p>CONQUEROR</p>
          <p style={styles.price}>₱1999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.shoesItem}>
          <img src="./src/assets/Blazar L.png" alt="BLAZAR L" style={styles.shoesImage} />
          <p>BLAZAR L</p>
          <p style={styles.price}>₱1999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 805</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ShoesProdDetails;
