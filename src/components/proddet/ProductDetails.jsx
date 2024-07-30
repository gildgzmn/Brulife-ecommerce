import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((error) => {
        console.error("There was an error fetching the product!", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    const token = localStorage.getItem("auth_token");
    const userId = localStorage.getItem("user_id");

    if (!token || !userId) {
      console.error("User is not authenticated.");
      return;
    }

    axios
      .post(
        `http://127.0.0.1:8000/api/products/${id}/add`,
        {
          user_id: userId,
          product_id: product.id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      )
      .then((response) => {
        alert("Product added to cart successfully");
      })
      .catch((error) => {
        console.error(
          "There was an error adding the product to the cart!",
          error
        );
      });
  };

  // Update the quantity state when input changes
  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  if (!product) return <div>Loading...</div>;

  const styles = {
    productDetails: {
      fontFamily: "Arial, sans-serif",
      margin: "80px",
    },
    productName: {
      fontSize: "50px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    productHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    productImage: {
      width: "600px",
      height: "auto",
      marginRight: "20px",
    },
    productInfo: {
      maxWidth: "600px",
    },
    price: {
      fontSize: "24px",
      color: "#b12704",
    },
    rating: {
      fontSize: "18px",
      marginBottom: "10px",
    },
    quantity: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    quantityButton: {
      backgroundColor: "black",
      border: "1px solid #ccc",
      padding: "5px 10px",
    },
    quantityInput: {
      width: "40px",
      textAlign: "center",
      margin: "0 5px",
    },
    productDescription: {
      marginBottom: "80px",
      padding: "0 200px",
      fontSize: "20px",
    },
    relatedProduct: {
      display: "flex",
      justifyContent: "space-around",
    },
    productItem: {
      textAlign: "center",
    },
    productsImage: {
      width: "100px",
      height: "auto",
      marginBottom: "10px",
    },
    relatedTitle: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "32px",
      marginBottom: "40px",
    },
  };

  return (
    <div style={styles.productDetails}>
      <div style={styles.productHeader}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>{product.name}</h1>
          <p style={styles.price}>₱{product.price}</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ {product.rating}</p>
          <div style={styles.quantity}>
          <Button
              style={styles.quantityButton}
              onClick={() => setQuantity(quantity - 1)}
            > 
              -
            </Button>
            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              style={styles.quantityInput}
            />
            <Button
              style={styles.quantityButton}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button style={styles.addToCart} onClick={handleAddToCart}>Add to Cart</Button>
          <Button style={styles.checkout}>Check Out</Button>
        </div>
      </div>
      <p style={styles.productDescription}>{product.description}
      </p>
      <h2 style={styles.relatedTitle}>R e l a t e d P r o d u c t s</h2>
      <div style={styles.relatedProduct}>
        <div style={styles.productItem}>
          <img src="./src/assets/" alt="" style={styles.productsImage} />
          <p>KHEAN</p>
          <p style={styles.price}>₱99.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 162</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.productItem}>
          <img src="./src/assets/" alt="" style={styles.productsImage} />
          <p>DREI</p>
          <p style={styles.price}>₱99.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 1401</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
        <div style={styles.productItem}>
          <img src="./src/assets/" alt="" style={styles.productsImage} />
          <p>ALCORAE</p>
          <p style={styles.price}>₱99.99</p>
          <p style={styles.rating}>⭐⭐⭐⭐⭐ 805</p>
          <Button style={styles.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;