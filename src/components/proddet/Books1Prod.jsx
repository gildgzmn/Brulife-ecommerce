import React from 'react';
import { Button } from '@/components/ui/button';

const BooksProdDetails = () => {
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
      width: '450px',
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
    relatedBooks: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    booksItem: {
      textAlign: 'center',
    },
    booksImage: {
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
          src="./src/assets/Product7.png" 
          alt="Books" 
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>HARRY POTTER AMERICAN BOOK</h1>
          <p style={styles.price}>₱599.99</p>
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
        Harry Potter and the Sorcerer's Stone is a fantasy novel by British author J. K. Rowling. It was first published in 1997.
      </p>
      <h2 style={styles.relatedTitle}>R e l a t e d  B o o k s </h2>
      <div style={styles.relatedBooks}>
        <div style={styles.booksItem}>
          <img src="./src/assets/ScorchTrial.png" alt="Book" style={styles.booksImage} />
          <p>SCORCH TRIAL</p>
          <p style={styles.price}>₱99.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 162</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.booksItem}>
          <img src="./src/assets/Maze.png" alt="Deathly Hallows" style={styles.booksImage} />
          <p>MAZE</p>
          <p style={styles.price}>₱199.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.booksItem}>
          <img src="./src/assets/DeathCure.png" alt="Death Cure" style={styles.booksImage} />
          <p>DEATH CURE</p>
          <p style={styles.price}>₱199.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 805</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default BooksProdDetails;