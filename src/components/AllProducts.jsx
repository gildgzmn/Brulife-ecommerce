import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
        })
            .then(response => response.json())
            .then(text => {
                setProducts(text.products);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div style={styles.allProductsContainer}>
            <div style={styles.filters}>
                <h2 style={styles.filterHeader}>Filters</h2>
                <ul style={styles.filterList}>
                    {['Perfume', 'Chocolate', 'Beverages', 'Food', 'Book', 'Shoes', 'Pet Care', 'Kids', 'Gadgets'].map((item, index) => (
                        <li key={index} style={styles.filterItem}>
                            <Button style={styles.button}>
                                {item}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={styles.products}>
                <h1 style={styles.productHeader}>All Products</h1>
                <div style={styles.productGrid}>
                    {products.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`} style={styles.productCardLink}>
                            <div style={styles.productCard}>
                                <div style={styles.imageContainer}>
                                    <img src={product.image} alt={product.name} style={styles.productImage} />
                                </div>
                                <h3 style={styles.productName}>{product.name.toUpperCase()}</h3>
                                <p style={styles.productPrice}>₱{product.price}</p>
                                <p style={styles.productInventory}>Stocks: {product.inventory}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <Button className="load-more" style={styles.loadMore}>See More</Button>
            </div>
        </div>
    );
};

const styles = {
    allProductsContainer: {
        display: 'flex',
        padding: '20px',
    },
    filters: {
        width: '200px',
        padding: '20px',
        background: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    filterHeader: {
        marginBottom: '20px',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    filterList: {
        listStyleType: 'none',
        padding: 0,
    },
    filterItem: {
        margin: '10px 0',
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        background: '#000',
        color: '#fff',
        border: '1px solid #000',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    },
    products: {
        flex: 1,
        padding: '20px',
    },
    productHeader: {
        textAlign: 'center',
        marginBottom: '20px',
        fontWeight: 'bold',
        fontSize: '24px',
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
    },
    productCard: {
        width: '100%',
        height: '320px',
        background: '#fff',
        borderRadius: '8px',
        border: '2px solid #ddd',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '10px',
    },
    imageContainer: {
        width: '100%',
        height: '180px',
        overflow: 'hidden',
        borderRadius: '8px',
        marginBottom: '10px',
    },
    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    productName: {
        fontWeight: 'bold',
        fontSize: '18px',
        margin: '5px 0',
        textAlign: 'center',
    },
    productPrice: {
        fontSize: '14px',
        fontWeight: 'normal',
        color: '#e74c3c',
        margin: '2px 0', 
        textAlign: 'center',
    },
    productInventory: {
        fontSize: '14px',
        color: '#555',
        margin: '2px 0', 
        textAlign: 'center',
    },
    loadMore: {
        display: 'block',
        margin: '20px auto',
        padding: '10px 20px',
        background: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
};

export default AllProducts;