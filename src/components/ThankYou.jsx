import React from 'react';

const ThankYou = () => {
  return (
    <div style={styles.thankYouPage}>
      <h1>Thank you for your order</h1>
      <p>An email confirmation has been sent to Jessie.Uresti@gmail.com.</p>
      <div style={styles.orderDetails}>
        <p><strong>Order number:</strong> 1092 - 1028 - 873</p>
        <p><strong>Order total Price:</strong> ₱ 998.99</p>
        <p><strong>Delivered to:</strong> Jessie D. Uresti | (+63) 915 895 8643 <br />
        4986 Jadewood Farms, New Brunswick</p>
      </div>
      <a href="/return-policy" style={styles.returnPolicyLink}>Read about our return Policy</a>
      <h2>You might also like</h2>
      <div style={styles.suggestedProducts}>
        <div style={styles.productCard}>
          <div style={styles.productImage}></div>
          <h3>Alcorac</h3>
          <p style={styles.productPrice}>₱ 999.99</p>
          <div style={styles.productRating}>★★★★☆</div>
          <button style={styles.addToCart}>Add to Cart</button>
        </div>
        <div style={styles.productCard}>
          <div style={styles.productImage}></div>
          <h3>Klerei</h3>
          <p style={styles.productPrice}>₱ 999.99</p>
          <div style={styles.productRating}>★★★★☆</div>
          <button style={styles.addToCart}>Add to Cart</button>
        </div>
        <div style={styles.productCard}>
          <div style={styles.productImage}></div>
          <h3>Drue</h3>
          <p style={styles.productPrice}>₱ 999.99</p>
          <div style={styles.productRating}>★★★★☆</div>
          <button style={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
      <button style={styles.seeMore}>see more </button>
    </div>
  );
};

const styles = {
  thankYouPage: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  orderDetails: {
    margin: '20px 0'
  },
  returnPolicyLink: {
    display: 'block',
    margin: '10px 0 30px',
    color: '#000',
    textDecoration: 'underline'
  },
  suggestedProducts: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  productCard: {
    background: '#f9f9f9',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '200px',
    textAlign: 'center'
  },
  productImage: {
    width: '100%',
    height: '150px',
    background: '#ddd',
    marginBottom: '10px'
  },
  productPrice: {
    fontSize: '18px',
    color: '#333',
    margin: '10px 0'
  },
  productRating: {
    fontSize: '16px',
    color: '#f0c14b',
    marginBottom: '10px'
  },
  addToCart: {
    background: '#f0c14b',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  seeMore: {
    marginTop: '20px',
    background: '#ddd',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px'
  }
};

export default ThankYou;
