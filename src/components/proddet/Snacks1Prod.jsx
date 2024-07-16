import React from 'react';
import { Button } from '@/components/ui/button';

const BeveragesProdDetails = () => {
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
    relatedSnacks: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    snacksItem: {
      textAlign: 'center',
    },
    snacksImage: {
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
          src="./src/assets/Chile Limon.png" 
          alt="Beverages" 
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>LAYS CHILE LIMON FLAVORED POTATO CHIPS</h1>
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
      It all starts with farm-grown potatoes, cooked and seasoned to perfection. Then we add the spice of chilies and the zing of real lime. So every LAY'S® pototato chip is perfectly crispy and delicious. Happiness in Every Bite.®
      </p>
      <h2 style={styles.relatedTitle}>R e l a t e d  S n a c k s</h2>
      <div style={styles.relatedSnacks}>
        <div style={styles.snacksItem}>
          <img src="./src/assets/ClassicPotato.png" alt="Chips" style={styles.snacksImage} />
          <p>LAYS CLASSIC POTATO CHIPS</p>
          <p style={styles.price}>₱999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 162</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.snacksItem}>
          <img src="./src/assets/PotatoChips.png" alt="Chips" style={styles.snacksImage} />
          <p>LAYS POTATO CHIPS</p>
          <p style={styles.price}>₱999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.snacksItem}>
          <img src="./src/assets/BarbequeFlavor.png" alt="Chips" style={styles.snacksImage} />
          <p>LAYS BARBEQUE FLAVOR POTATO CHIPS</p>
          <p style={styles.price}>₱999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 805</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default BeveragesProdDetails;
