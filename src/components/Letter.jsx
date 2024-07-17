import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  bannerImageContainer: {
    display: 'flex',
    justifyContent: 'center',
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
    backgroundColor: '#9e9e9e', // gray-400
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
  section: {
    margin: '20px',
    textAlign: 'center',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: '36px',
  },
  bestSellersContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestSellersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 250px)',
    gap: '10px',
  },
  bestSellerProduct: {
    width: '225px',
    height: '350px',
    backgroundColor: '#e0e0e0',
  },
  nextButton: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#9e9e9e',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
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
  allProduct: {
    margin: '10px',
    width: '250px',
    height: '250px',
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
  },
};

const Letter = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.bannerImageContainer}>
          <img src="./src/assets/HeroSemi16.png" alt="Timeless Designs Treasured Moments" style={styles.bannerImage} />
        </div>
      </header>
      <nav style={styles.categories}>
        <Link to="/newborn" style={styles.link}>
          <Button style={styles.shadcnButton}>NEWBORN</Button>
        </Link>
        <Link to="/babies-kids" style={styles.link}>
          <Button style={styles.shadcnButton}>BABIES & KIDS</Button>
        </Link>
        <Link to="/toddler" style={styles.link}>
          <Button style={styles.shadcnButton}>TODDLER</Button>
        </Link>
        <Link to="/pre-school" style={styles.link}>
          <Button style={styles.shadcnButton}>PRE-SCHOOL</Button>
        </Link>
      </nav>
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Best Sellers</h2>
        <div style={styles.bestSellersContainer}>
          <div style={styles.bestSellersGrid}>
            <div style={styles.bestSellerProduct}></div>
            <div style={styles.bestSellerProduct}></div>
            <div style={styles.bestSellerProduct}></div>
            <div style={styles.bestSellerProduct}></div>
            <div style={styles.bestSellerProduct}></div>
            <div style={styles.bestSellerProduct}></div>
            <div style={styles.bestSellerProduct}></div>
            <div style={styles.bestSellerProduct}></div>
          </div>
          <button style={styles.nextButton}>&gt;</button>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>All Products</h2>
        <div style={styles.productGrid}>
          <div style={styles.allProduct}></div>
          <div style={styles.allProduct}></div>
          <div style={styles.allProduct}></div>
          <div style={styles.allProduct}></div>
          <div style={styles.allProduct}></div>
          <div style={styles.allProduct}></div>
          <div style={styles.allProduct}></div>
          <div style={styles.allProduct}></div>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Community Reviews</h2>
        <Button style={styles.shadcnButton}>View All</Button>
        <div style={styles.reviewGrid}>
          <div style={styles.review}></div>
          <div style={styles.review}></div>
          <div style={styles.review}></div>
        </div>
      </section>
    </div>
  );
};

export default Letter;
