import React from 'react';
import { Button } from '@/components/ui/button';

const AllProducts = () => {
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
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} style={styles.productCard}>
                            <img src={`path_to_your_image${index}.jpg`} alt={`Product ${index}`} style={styles.productImage} />
                        </div>
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
        background: '#e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
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
