import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Alcorae', price: 400.00, image: './src/assets/Featured4.png', checked: false, quantity: 0 },
    { id: 2, name: 'Drue', price: 350.00, image: './src/assets/Featured3.png', checked: false, quantity: 0 },
    // Add more items as needed
  ]);
  const [allChecked, setAllChecked] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const newSubtotal = items.reduce((sum, item) => {
      return item.checked ? sum + (item.price * item.quantity) : sum;
    }, 0);
    setSubtotal(newSubtotal);
  }, [items]);

  const handleAllCheckboxChange = (event) => {
    const checked = event.target.checked;
    setAllChecked(checked);
    setItems(items.map(item => ({ ...item, checked })));
  };

  const handleItemCheckboxChange = (event, id) => {
    const checked = event.target.checked;
    setItems(items.map(item => item.id === id ? { ...item, checked } : item));
    setAllChecked(items.every(item => item.id === id ? checked : item.checked));
  };

  const handleIncrement = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (id) => {
    setItems(items.map(item => 
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div style={{ width: 'auto', height: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '32px', marginTop: '20px', marginBottom: '20px' }}>Shopping Cart</h2>
      
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', marginLeft: '32px' }}>
          <input 
            type="checkbox" 
            checked={item.checked} 
            onChange={(e) => handleItemCheckboxChange(e, item.id)} 
          />
          <img src={item.image} alt={item.name} style={{ width: '200px', height: '150px', marginRight: '100px' }} />
          <div style={{ flexGrow: 1 }}>
            <h3 style={{ fontSize: '24px', margin: '0' }}>{item.name}</h3>
            <p style={{ fontSize: '18px', color: '#888' }}>₱ {item.price.toFixed(2)}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="outline" onClick={() => handleDecrement(item.id)}>-</Button>
              <input type="number" value={item.quantity} readOnly style={{ width: '40px', textAlign: 'center', margin: '0 10px' }} />
              <Button variant="outline" onClick={() => handleIncrement(item.id)}>+</Button>
            </div>
          </div>
        </div>
      ))}
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #ccc', paddingTop: '20px', marginLeft:  '32px' }}>
        <label>
          <input 
            type="checkbox" 
            checked={allChecked} 
            onChange={handleAllCheckboxChange} 
          />
          All
        </label>
        <input type="text" placeholder="Select or Enter Code" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginLeft: '32px', marginBottom: '20px', fontSize: '18px' }}>
        <span>Subtotal: ₱ {subtotal.toFixed(2)}</span>
        <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleCheckout}>Check Out</Button>
      </div>
    </div>
  );
};

export default Cart;
