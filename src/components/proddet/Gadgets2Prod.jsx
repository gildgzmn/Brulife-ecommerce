import React from 'react';
import { Button } from '@/components/ui/button';

const GadgetsProdDetails = () => {
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
      width: '400px',
      height: 'auto',
      marginRight: '20px',
      marginLeft: '200px',
      marginBottom: '20px',
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
    relatedGadgets: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    gadgetsItem: {
      textAlign: 'center',
    },
    gadgetsImage: {
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
          src="./src/assets/product12.png" 
          alt="Phone" 
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>IPHONE 15 PRO</h1>
          <p style={styles.price}>₱3199.99</p>
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
      <h2 style={styles.relatedTitle}>R e l a t e d  G a d g e t s</h2>
      <div style={styles.relatedGadgets}>
        <div style={styles.gadgetsItem}>
          <img src="./src/assets/SamsungGalaxy.png" alt="Phone" style={styles.gadgetsImage} />
          <p>SAMSUNG GALAXY A33 5G</p>
          <p style={styles.price}>₱2199.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 162</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.gadgetsItem}>
          <img src="./src/assets/Realme9.png" alt="Phone" style={styles.gadgetsImage} />
          <p>REALME 9 PRO</p>
          <p style={styles.price}>₱2199.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.gadgetsItem}>
          <img src="./src/assets/RedmiNote.png" alt="Phone" style={styles.gadgetsImage} />
          <p>REDMI NOTE 12 PRO</p>
          <p style={styles.price}>₱2199.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 805</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default GadgetsProdDetails;
