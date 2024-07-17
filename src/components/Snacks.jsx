import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Snacks() {
  return (
    <div className="Snacks container mx-auto" style={styles.container}>
      {/* Top Hero Section */}
      <header style={styles.header}>
        <img src="./src/assets/HeroSemi4.png" alt="Banner Image" style={styles.bannerImage} />
      </header>
      
      {/* Navigation Links */}
      <nav style={styles.categories}>
        <Link to="/breakfast" style={styles.link}>
          <Button style={styles.shadcnButton}>BreakFast</Button>
        </Link>
        <Link to="/lunch" style={styles.link}>
          <Button style={styles.shadcnButton}>Lunch</Button>
        </Link>
        <Link to="/dinner" style={styles.link}>
          <Button style={styles.shadcnButton}>Dinner</Button>
        </Link>
      </nav>
      
      {/* Best Sellers Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Best Sellers</h2>
        <div style={styles.bestSellersGrid}>
          <BestSellerProduct imageSrc="./src/assets/FoodProd1.png" />
          <BestSellerProduct imageSrc="./src/assets/FoodProd2.png" />
          <BestSellerProduct imageSrc="./src/assets/FoodProd3.png" />
          <BestSellerProduct imageSrc="./src/assets/FoodProd4.png" />
        </div>
      </section>

      {/* New Banner Section */}
      <header style={styles.header}>
        <img src="./src/assets/HeroSemi6.png" alt="Another Banner Image" style={styles.bannerImage} />
      </header>
      
      {/* All Products Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>All Products</h2>
        <div style={styles.productGrid}>
          <AllProduct imageSrc="./src/assets/Food1.png" />
          <AllProduct imageSrc="./src/assets/Food2.png" />
          <AllProduct imageSrc="./src/assets/Food3.png" />
          <AllProduct imageSrc="./src/assets/Food4.png" />
          <AllProduct imageSrc="./src/assets/Food5.png" />
          <AllProduct imageSrc="./src/assets/Food6.png" />
          <AllProduct imageSrc="./src/assets/Food7.png" />
          <AllProduct imageSrc="./src/assets/Food8.png" />
        </div>
      </section>
      
      {/* Community Reviews Section */}
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
  bestSellerProduct: {
    margin: '10px',
    width: '225px',
    height: '350px',
    backgroundColor: '#e0e0e0',
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
  }
};

export default Snacks;
