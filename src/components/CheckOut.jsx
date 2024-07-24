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
          <h2>Delivery Address</h2>
          <p>Jessie D. Uresti | (+63) 915 895 6843</p>
          <p>4986 Jadewood Farms, New Brunswick</p>
        </div>
        <div style={styles.shoppingCart}>
          <h3>Shopping Cart</h3>
          <div style={styles.cartItem}>
            <div style={styles.itemImage}></div>
            <div style={styles.itemDetails}>
              <h4 style={styles.itemTitle}>Alcorae</h4>
              <p>₱ 999.99</p>
              <p>Quantity <span>1</span></p>
              <p style={styles.remove}>remove</p>
            </div>
          </div>
        </div>
        <div style={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div style={styles.summaryDetails}>
            <p>Subtotal <span>₱ 999.99</span></p>
            <p>Shipping Fee <span>₱ 999.99</span></p>
            <p>Tax <span>₱ 999.99</span></p>
            <p>Vouchers <span style={styles.voucherDropdown}>▼</span></p>
            <p>Estimated Total <span>₱ 999.99</span></p>
          </div>
          <div style={styles.paymentInfo}>
            <h2>Payment Information</h2>
            <form>
              <label>
                <input type="radio" name="payment" value="cod" /> Cash on Delivery
              </label>
              <label>
                <input type="radio" name="payment" value="paypal" /> PayPal
              </label>
              <label>
                <input type="radio" name="payment" value="card" /> Credit or Debit Card
              </label>
            </form>
          </div>
        </div>
      </div>
      <div style={styles.placeOrderContainer}>
        <Button onClick={handlePlaceOrder}>Place Order</Button>
      </div>
    </div>
  );
};

const styles = {
  checkoutContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center'
  },
  checkoutContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px'
  },
  deliveryAddress: {
    flex: 1,
    marginRight: '20px',
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px'
  },
  shoppingCart: {
    flex: 1,
    marginRight: '20px',
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px'
  },
  orderSummary: {
    flex: 1,
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px'
  },
  cartItem: {
    display: 'flex'
  },
  itemImage: {
    width: '100px',
    height: '100px',
    background: '#ccc',
    marginRight: '20px'
  },
  itemDetails: {
    flex: 1
  },
  itemTitle: {
    fontFamily: '\'Lilita One\', cursive'
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
  }
};

export default Checkout;
