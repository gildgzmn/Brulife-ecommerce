import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function MenShoes() {
  return (
    <div className="MenShoes" style={styles.container}>
      <header style={styles.header}>
        <img src="./src/assets/HeroSemi10.png" alt="Banner Image" style={styles.bannerImage} />
      </header>
      
      <nav style={styles.categories}>
        <Link to="/shoes" style={styles.link}>
          <Button style={styles.shadcnButton}>SHOES</Button>
        </Link>
        <Link to="/womenshoes" style={styles.link}>
          <Button style={styles.shadcnButton}>WOMEN</Button>
        </Link>
        <Link to="/kidsshoes" style={styles.link}>
          <Button style={styles.shadcnButton}>KIDS</Button>
        </Link>
      </nav>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Best Sellers</h2>
        <div style={styles.bestSellersGrid}>
          <BestSellerProduct imageSrc="./src/assets/ShoesProd1.jpg" />
          <BestSellerProduct imageSrc="./src/assets/ShoesProd2.jpg" />
          <BestSellerProduct imageSrc="./src/assets/ShoesProd3.jpg" />
          <BestSellerProduct imageSrc="./src/assets/ShoesProd4.jpg" />
        </div>
      </section>

      {/* New banner section */}
      <header style={styles.header}>
        <img src="./src/assets/MenShoesBanner.png" alt="Another Banner Image" style={styles.bannerImage} />
      </header>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>All Products</h2>
        <div style={styles.productGrid}>
          <AllProduct imageSrc="./src/assets/Shoes1.png" />
          <AllProduct imageSrc="./src/assets/Shoes2.png" />
          <AllProduct imageSrc="./src/assets/Shoes3.png" />
          <AllProduct imageSrc="./src/assets/Shoes4.png" />
          <AllProduct imageSrc="./src/assets/Shoes5.png" />
          <AllProduct imageSrc="./src/assets/Shoes6.png" />
          <AllProduct imageSrc="./src/assets/Shoes7.png" />
          <AllProduct imageSrc="./src/assets/Shoes8.png" />
        </div>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Community Reviews</h2>
        <div style={styles.reviewGrid}>
          <Review />
          <Review />
          <Review />
        </div>
      </section>
    </div>
  );
}

function BestSellerProduct({ imageSrc }) {
  return (
    <div style={styles.bestSellerProduct}>
      <img src={imageSrc} alt="Product" style={styles.productImage} />
    </div>
  );
}

function AllProduct({ imageSrc }) {
  return (
    <div style={styles.allProduct}>
      <img src={imageSrc} alt="Product" style={styles.productImage} />
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
  bestSellersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyContent: 'center',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyContent: 'center',
  },
  reviewGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bestSellerProduct: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#e0e0e0',
  },
  allProduct: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#e0e0e0',
  },
  review: {
    width: '100%',
    height: 'auto',
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

export default MenShoes;
