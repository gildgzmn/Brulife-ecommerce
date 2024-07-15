import React from 'react';
import FeaturedBrands from './FeaturedBrands';
import { Button } from '@/components/ui/button';

const Gadgets = () => {
  const getProductImagePath = (index) => `./src/assets/gadgets/phone${index}.png`;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="./src/assets/HeroSemi5.png" alt="Feastables Logo" style={styles.bannerImage} />
      </header>
      <div style={styles.categories}>
        <FeaturedBrands showHeader={false} buttonClass="custom-button-class" />
      </div>
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>BEST SELLERS</h2>
        <div style={styles.bestSellersGrid}>
          {[...Array(8)].map((_, index) => (
            <div key={index} style={styles.bestSellersProduct}>
              <img
                src={getProductImagePath(index + 1)}
                style={styles.productImage}
                alt={`Best Seller ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
      <div style={styles.textCenter}>
        <Button>See More</Button>
      </div>
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>ALL PRODUCTS</h2>
        <div style={styles.allProductsGrid}>
          {[...Array(8)].map((_, index) => (
            <div key={index} style={styles.allProduct}>
              <img
                src={getProductImagePath(index + 9)}
                style={styles.productImage}
                alt={`All Product ${index + 9}`}
              />
            </div>
          ))}
        </div>
      </section>
      <div style={styles.textCenter}>
        <Button>See More</Button>
      </div>
    </div>
  );
};

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
  bestSellersProduct: {
    margin: '10px',
    width: '250px',
    height: '300px',
    backgroundColor: '#e0e0e0',
  },
  allProductsGrid: {
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
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textCenter: {
    textAlign: 'center',
    margin: '20px 0',
  },
};

export default Gadgets;
