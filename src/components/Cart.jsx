import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("auth_token");
      const response = await fetch("http://127.0.0.1:8000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setItems(
          data.cartItems.map((item) => ({
            ...item,
            name: item.product_name,
            price: parseFloat(item.product_price),
            image: item.product_img,
            checked: false,
          }))
        );
      } else {
        console.error("Error fetching cart items:", data.message);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const newSubtotal = items.reduce((sum, item) => {
      return item.checked ? sum + item.price * item.quantity : sum;
    }, 0);
    setSubtotal(newSubtotal);
  }, [items]);

  const handleAllCheckboxChange = (event) => {
    const checked = event.target.checked;
    setAllChecked(checked);
    setItems(items.map((item) => ({ ...item, checked })));
  };

  const handleItemCheckboxChange = (event, id) => {
    const checked = event.target.checked;
    setItems(
      items.map((item) => (item.id === id ? { ...item, checked } : item))
    );
    setAllChecked(
      items.every((item) => (item.id === id ? checked : item.checked))
    );
  };

  const handleIncrement = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("auth_token");
    const response = await fetch(`http://127.0.0.1:8000/api/cart/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setItems(items.filter(item => item.id !== id));
    } else {
      const data = await response.json();
      console.error("Error deleting cart item:", data.message);
    }
  };

  const handleCheckout = () => {
    const selectedItems = items.filter(item => item.checked);
    navigate("/checkout", { state: { selectedItems, subtotal } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "32px", marginBottom: "20px" }}>
        Shopping Cart
      </h2>

      <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={handleAllCheckboxChange}
            style={{ marginRight: "10px" }}
          />
          Select all
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              paddingBottom: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => handleItemCheckboxChange(e, item.id)}
              style={{ marginRight: "10px" }}
            />
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100px",
                height: "100px",
                marginRight: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: "18px", margin: "0 0 10px 0", fontWeight: "bold" }}>{item.name}</h3>
              <p style={{ fontSize: "14px", margin: "0 0 10px 0" }}>
                ₱{item.price.toFixed(2)}
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button variant="outline" onClick={() => handleDecrement(item.id)}>
                  -
                </Button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  style={{
                    width: "40px",
                    textAlign: "center",
                    margin: "0 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <Button variant="outline" onClick={() => handleIncrement(item.id)}>
                  +
                </Button>
              </div>
            </div>
            <Button variant="outline" onClick={() => handleDelete(item.id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Select or Enter Code"
          style={{
            flex: 1,
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "4px",
            marginRight: "20px",
          }}
        />
        <span style={{ fontSize: "18px" }}>
          Subtotal: ₱{subtotal.toFixed(2)}
        </span>
        <Button
          style={{ backgroundColor: "black", color: "white", marginLeft: "20px" }}
          onClick={handleCheckout}
        >
          Check Out
        </Button>
      </div>
    </div>
  );
};

export default Cart;