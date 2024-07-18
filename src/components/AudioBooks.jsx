import React from 'react';
import { Button } from '@/components/ui/button';  
import { Link } from 'react-router-dom';  

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    marginBottom: '20px',
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
  shadcnButtonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  shadcnButton: {
    margin: '0 10px',
    backgroundColor: '#9e9e9e', 
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  arrowIcon: {
    marginLeft: '5px', 
  },
  section: {
    marginBottom: '20px',
    padding: '20px', 
    backgroundColor: '#fff', 
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px', 
  },
  sectionHeader: {
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: 'bold', 
    fontSize: '24px', 
  },
  booksGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '5px',
  },
  bookPlaceholder: {
    position: 'relative', 
    width: '300px',
    height: '400px',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    position: 'absolute',
    top: '50%', 
    right: '-30px', 
    transform: 'translateY(-50%)', 
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  },
  seeMoreButton: {
    display: 'block',
    margin: '20px auto', 
    backgroundColor: 'black', 
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

const AudioBooks = () => {
  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <img style={styles.bannerImage} src="./src/assets/HeroSemi17.png" alt="Icebreaker Book Cover" />
      </div>
      <div style={styles.categories}>
        <Link to="/romance" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Romance</Button>
        </Link>
        <Link to="/action" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Action</Button>
        </Link>
        <Link to="/non-fiction" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Non-Fiction</Button>
        </Link>
        <Link to="/young-adult" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Young Adult</Button>
        </Link>
        <Link to="/crime" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Crime</Button>
        </Link>
        <Link to="/books" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Books</Button>
        </Link>
        <Link to="/mystery" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Mystery</Button>
        </Link>
        <Link to="/horror" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Horror</Button>
        </Link>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Featured Books</h2>
        <div style={styles.booksGrid}>
          <div style={styles.bookPlaceholder}>Book 1</div>
          <div style={styles.bookPlaceholder}>Book 2</div>
          <div style={styles.bookPlaceholder}>Book 3</div>
          <div style={styles.bookPlaceholder}>Book 4</div>
          <div style={styles.bookPlaceholder}>Book 5</div>
          <div style={styles.bookPlaceholder}>Book 6</div>
          <div style={styles.bookPlaceholder}>Book 7</div>
          <div style={styles.bookPlaceholder}>
            Book 8
            <button style={styles.nextButton}>&gt;</button>
          </div>
        </div>
        <button style={styles.seeMoreButton}>See More</button>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Audio Books</h2>
        <div style={styles.booksGrid}>
          <div style={styles.bookPlaceholder}>Book 1</div>
          <div style={styles.bookPlaceholder}>Book 2</div>
          <div style={styles.bookPlaceholder}>Book 3</div>
          <div style={styles.bookPlaceholder}>Book 4</div>
          <div style={styles.bookPlaceholder}>Book 5</div>
          <div style={styles.bookPlaceholder}>Book 6</div>
          <div style={styles.bookPlaceholder}>Book 7</div>
          <div style={styles.bookPlaceholder}>Book 8</div>
          <div style={styles.bookPlaceholder}>Book 9</div>
          <div style={styles.bookPlaceholder}>Book 10</div>
          <div style={styles.bookPlaceholder}>Book 11</div>
          <div style={styles.bookPlaceholder}>Book 12</div>
          <div style={styles.bookPlaceholder}>Book 13</div>
          <div style={styles.bookPlaceholder}>Book 14</div>
          <div style={styles.bookPlaceholder}>Book 15</div>
          <div style={styles.bookPlaceholder}>
            Book 16
            <button style={styles.nextButton}>&gt;</button>
          </div>
        </div>
        <button style={styles.seeMoreButton}>See More</button>
      </div>
    </div>
  );
};

export default AudioBooks;
