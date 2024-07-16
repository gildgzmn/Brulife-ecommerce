import React from 'react';
import { Button } from '@/components/ui/button';

const PetCareProdDetails = () => {
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
    relatedPetCare: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    petcareItem: {
      textAlign: 'center',
    },
    petcareImage: {
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
          src="./src/assets/ChickenJerky.png" 
          alt="DogFood" 
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>DEHYDRATED CHICKEN JERKY DOG TREATS</h1>
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
      Made of quality free-range chicken breast that is naturally protein-packed and has the extra crunch your pup craves. Perfect for an everyday high-value reward or break them into pieces for easy training treats.
      </p>
      <h2 style={styles.relatedTitle}>R e l a t e d  P e t C a r e</h2>
      <div style={styles.relatedPetCare}>
        <div style={styles.petcareItem}>
          <img src="./src/assets/ChickenTreats.png" alt="DogFood" style={styles.petcareImage} />
          <p>DEHYDRATED CHICKEN SPLEEN DOG TREATS</p>
          <p style={styles.price}>₱1999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 162</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.shoesItem}>
          <img src="./src/assets/DogFood.png" alt="DogFood" style={styles.petcareImage} />
          <p>DEHYDRATED BEEF LIVER DOG TREATS</p>
          <p style={styles.price}>₱1999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.shoesItem}>
          <img src="./src/assets/PorkTreats.png" alt="DogFood" style={styles.petcareImage} />
          <p>DEHYDRTAED PORK HEART DOG TREATS</p>
          <p style={styles.price}>₱1999.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 805</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default PetCareProdDetails;
