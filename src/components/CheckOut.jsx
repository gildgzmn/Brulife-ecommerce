import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedItems, subtotal } = location.state || { selectedItems: [], subtotal: 0 };

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user info from backend
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            'Accept': 'application/json',
          }
        });
        const data = await response.json();
        setUser(data.profileUser);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);
  const handlePlaceOrder = () => {
    navigate('/thankyou');
  };

  return (
    <div style={styles.checkoutContainer}>
    <h1 style={styles.header}>Check Out</h1>
    <div style={styles.checkoutContent}>
      {user ? (
        <div style={styles.section}>
          <h2 style={styles.sectionHeader}>Delivery Address</h2>
          <p>{`${user.first_name} ${user.middle_initial} ${user.last_name} (+63) ${user.contact_number}`}</p>
          <p>{`${user.address} ${user.zip_code}`}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
        <div style={styles.section}>
          <h2 style={styles.sectionHeader}>Products Ordered</h2>
          {selectedItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <div style={styles.itemImage}>
                <img src={item.image} alt={item.name} style={styles.image} />
              </div>
              <div style={styles.itemDetails}>
                <h4>{item.name}</h4>
                <p>₱{item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div style={styles.itemPrice}>
                <p>₱{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionHeader}>Order Summary</h2>
          <div style={styles.summaryDetails}>
            <p>Merchandise Subtotal: <span>₱{subtotal.toFixed(2)}</span></p>
            <p>Shipping Fee: <span>₱100.00</span></p>
            <p>Total Payment: <span>₱{(subtotal + 100).toFixed(2)}</span></p>
          </div>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionHeader}>Payment Method</h2>
          <form>
            <label>
              <input type="radio" name="payment" value="cod" /> Cash on Delivery
            </label>
          </form>
        </div>
        <div style={styles.placeOrderContainer}>
          <Button style={styles.placeOrderButton} onClick={handlePlaceOrder}>Place Order</Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  checkoutContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '36px',
    marginBottom: '20px',
  },
  checkoutContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  sectionHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  itemImage: {
    width: '80px',
    height: '80px',
    marginRight: '20px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  itemDetails: {
    flex: '1',
  },
  itemPrice: {
    width: '100px',
    textAlign: 'right',
  },
  summaryDetails: {
    marginBottom: '20px',
  },
  placeOrderContainer: {
    textAlign: 'center',
  },
  placeOrderButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Checkout;