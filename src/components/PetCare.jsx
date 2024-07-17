import React from 'react';
import FeaturedBrands from './FeaturedBrands';
import { Button } from '@/components/ui/button';

const PetCare = () => {
  const getProductImagePath = (index) => `./src/assets/petcare/Petcare${index}.png`;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="./src/assets/HeroSemi12.png" alt="Feastables Logo" style={styles.bannerImage} />
      </header>
      <div style={styles.categories}>
        <FeaturedBrands showHeader={false} buttonClass="custom-button-class" />
      </div>
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
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
        </div>
        <div style={styles.textCenter}>
          <Button>See More</Button>
        </div>
      </section>
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
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
        </div>
        <div style={styles.textCenter}>
          <Button>See More</Button>
        </div>
      </section>
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
  sectionContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: '36px',
    marginBottom: '20px',
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
    borderRadius: '8px',
    overflow: 'hidden',
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
    borderRadius: '8px',
    overflow: 'hidden',
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

export default PetCare;
