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
    backgroundColor: '#9e9e9e', // gray-400
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  arrowIcon: {
    marginLeft: '5px', // Adjust as needed
  },
  section: {
    marginBottom: '20px',
  },
  sectionHeader: {
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: 'bold', // Making the header bold
    fontSize: '24px', // Increasing font size
  },
  booksGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '5px',
  },
  bookPlaceholder: {
    position: 'relative', // Ensure relative positioning for absolute positioning of button
    width: '300px',
    height: '400px',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    position: 'absolute',
    top: '50%', // Center vertically
    right: '-30px', // Adjust as needed
    transform: 'translateY(-50%)', // Center vertically
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  },
  seeMoreButton: {
    display: 'block',
    margin: '20px auto', // Center horizontally
    backgroundColor: 'black', 
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

const Books = () => {
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
        <Link to="/audio-books" style={styles.shadcnButtonContainer}>
          <Button style={styles.shadcnButton}>Audio Books</Button>
        </Link>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Featured Books</h2>
        <div style={styles.booksGrid}>
          <div style={styles.bookPlaceholder}>Book 1</div>
          <div style={styles.bookPlaceholder}>Book 2</div>
          <div style={styles.bookPlaceholder}>Book 3</div>
          <div style={styles.bookPlaceholder}>
            Book 4
            <button style={styles.nextButton}>&gt;</button>
          </div>
        </div>
        <button style={styles.seeMoreButton}>See More</button>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Mystery</h2>
        <div style={styles.booksGrid}>
          <div style={styles.bookPlaceholder}>Book 1</div>
          <div style={styles.bookPlaceholder}>Book 2</div>
          <div style={styles.bookPlaceholder}>Book 3</div>
          <div style={styles.bookPlaceholder}>
            Book 4
            <button style={styles.nextButton}>&gt;</button>
          </div>
        </div>
        <button style={styles.seeMoreButton}>See More</button>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Romance</h2>
        <div style={styles.booksGrid}>
          <div style={styles.bookPlaceholder}>Book 1</div>
          <div style={styles.bookPlaceholder}>Book 2</div>
          <div style={styles.bookPlaceholder}>Book 3</div>
          <div style={styles.bookPlaceholder}>
            Book 4
            <button style={styles.nextButton}>&gt;</button>
          </div>
        </div>
        <button style={styles.seeMoreButton}>See More</button>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Horror</h2>
        <div style={styles.booksGrid}>
          <div style={styles.bookPlaceholder}>Book 1</div>
          <div style={styles.bookPlaceholder}>Book 2</div>
          <div style={styles.bookPlaceholder}>Book 3</div>
          <div style={styles.bookPlaceholder}>
            Book 4
            <button style={styles.nextButton}>&gt;</button>
          </div>
        </div>
        <button style={styles.seeMoreButton}>See More</button>
      </div>
    </div>
  );
};

export default Books;
