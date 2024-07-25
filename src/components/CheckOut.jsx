import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Ensure the path is correct

const Checkout = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/thankyou');
  };

  return (
    <div style={styles.checkoutContainer}>
      <h1 style={styles.header}>Check Out</h1>
      <div style={styles.checkoutContent}>
        <div style={styles.deliveryAddress}>
          <h2 style={styles.subHeader}>Delivery Address</h2>
          <p style={styles.text}>Jessie D. Uresti | (+63) 915 895 6843</p>
          <p style={styles.text}>4986 Jadewood Farms, New Brunswick</p>
        </div>
        <div style={styles.shoppingCart}>
          <h3 style={styles.subHeader}>Shopping Cart</h3>
          <div style={styles.cartItem}>
            <div style={styles.itemImage}>
              <img
                src="src/assets/Featured3.png" 
                alt="Alcorae"
                style={styles.image}
              />
            </div>
            <div style={styles.itemDetails}>
              <h4 style={styles.itemTitle}>Alcorae</h4>
              <p style={styles.text}>₱ 999.99</p>
              <p style={styles.text}>Quantity <span>1</span></p>
              <p style={styles.remove}>remove</p>
            </div>
          </div>
        </div>
        <div style={styles.orderSummary}>
          <h2 style={styles.subHeader}>Order Summary</h2>
          <div style={styles.summaryDetails}>
            <p style={styles.text}>Subtotal <span>₱ 999.99</span></p>
            <p style={styles.text}>Shipping Fee <span>₱ 999.99</span></p>
            <p style={styles.text}>Tax <span>₱ 999.99</span></p>
            <p style={styles.text}>Vouchers <span style={styles.voucherDropdown}>▼</span></p>
            <p style={styles.text}>Estimated Total <span>₱ 999.99</span></p>
          </div>
          <div style={styles.paymentInfo}>
            <h2 style={styles.subHeader}>Payment Information</h2>
            <form>
              <label style={styles.text}>
                <input type="radio" name="payment" value="cod" /> Cash on Delivery
              </label>
            </form>
          </div>
        </div>
      </div>
      <div style={styles.placeOrderContainer}>
        <Button style={styles.placeOrderButton} onClick={handlePlaceOrder}>Place Order</Button>
      </div>
    </div>
  );
};

const styles = {
  checkoutContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '36px'
  },
  checkoutContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
  },
  deliveryAddress: {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    width: '80%'
  },
  shoppingCart: {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    width: '80%'
  },
  orderSummary: {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    width: '80%'
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage: {
    width: '100px',
    height: '100px',
    background: '#ccc',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  itemDetails: {
    flex: 1,
    textAlign: 'left'
  },
  itemTitle: {
    fontFamily: '\'Lilita One\', cursive',
    fontSize: '24px'
  },
  text: {
    fontSize: '18px'
  },
  remove: {
    color: 'red',
    cursor: 'pointer'
  },
  summaryDetails: {
    margin: '10px 0'
  },
  voucherDropdown: {
    cursor: 'pointer'
  },
  paymentInfo: {
    marginTop: '20px'
  },
  placeOrderContainer: {
    textAlign: 'center',
    marginTop: '20px'
  },
  placeOrderButton: {
    backgroundColor: 'black',
    color: 'white'
  },
  subHeader: {
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

export default Checkout;
