import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; 

function Shoes() {
  return (
    <div className="Shoes" style={styles.container}>
      <header style={styles.header}>
        <img src="./src/assets/HeroSemi7.png" alt="Banner Image" style={styles.bannerImage} />
      </header>
      
      <nav style={styles.categories}>
        <Link to="/menshoes" style={styles.link}>
          <Button style={styles.shadcnButton}>MEN</Button>
        </Link>
        <Link to="/womenshoes" style={styles.link}>
          <Button style={styles.shadcnButton}>WOMEN</Button>
        </Link>
        <Link to="/kidsshoes" style={styles.link}>
          <Button style={styles.shadcnButton}>KIDS</Button>
        </Link>
      </nav>
      
      <section style={styles.section}>
        <h2>Best Sellers</h2>
        <div style={styles.bestSellersGrid}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
      
      <section style={styles.section}>
        <h2>All Products</h2>
        <div style={styles.productGrid}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
      
      <section style={styles.section}>
        <h2>Community Reviews</h2>
        <div style={styles.reviewGrid}>
          <Review />
          <Review />
          <Review />
        </div>
      </section>
    </div>
  );
}

function Product() {
  return (
    <div style={styles.product}>
      <img src="placeholder.jpg" alt="Product" style={styles.productImage} />
    </div>
  );
}

function Review() {
  return (
    <div style={styles.review}>
      <img src="placeholder.jpg" alt="Review" style={styles.reviewImage} />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    textAlign: 'center',
  },
  bannerImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  shadcnButton: {
    margin: '0 10px',
  },
  link: {
    textDecoration: 'none',
  },
  section: {
    margin: '20px',
    textAlign: 'center',
  },
  bestSellersGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  productGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  reviewGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  product: {
    margin: '10px',
    width: '150px',
    height: '250px', // Increase height for Best Sellers
    backgroundColor: '#e0e0e0',
  },
  review: {
    margin: '10px',
    width: '150px',
    height: '150px',
    backgroundColor: '#e0e0e0',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  reviewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
};

export default Shoes;
