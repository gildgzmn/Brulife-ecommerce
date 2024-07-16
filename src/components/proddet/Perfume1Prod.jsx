import React from 'react';
import { Button } from '@/components/ui/button';

const PerfumeProdDetails = () => {
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
    relatedPerfume: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    perfumeItem: {
      textAlign: 'center',
    },
    perfumeImage: {
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
          src="./src/assets/Featured1.png" 
          alt="Drue Perfume" 
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>DRUE</h1>
          <p style={styles.price}>₱99.99</p>
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
        The top notes present a captivating blend of black pepper, exotic saffron, and aromatic cumin. The heart unfolds with the rugged essence of leather, smoky incense, and earthy patchouli. As the fragrance settles, notes of comforting sandalwood, soft white musk, and rich amber envelop the senses. 
      </p>
      <h2 style={styles.relatedTitle}>R e l a t e d  P e r f u m e</h2>
      <div style={styles.relatedPerfume}>
        <div style={styles.perfumeItem}>
          <img src="./src/assets/Featured5.png" alt="KHEAN PERFUME" style={styles.perfumeImage} />
          <p>KHEAN</p>
          <p style={styles.price}>₱99.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 162</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.perfumeItem}>
          <img src="./src/assets/Featured6.png" alt="DREI PERFUME" style={styles.perfumeImage} />
          <p>DREI</p>
          <p style={styles.price}>₱99.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.perfumeItem}>
          <img src="./src/assets/Featured4.png" alt="ALCORAE PERFUME" style={styles.perfumeImage} />
          <p>ALCORAE</p>
          <p style={styles.price}>₱99.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 805</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default PerfumeProdDetails;