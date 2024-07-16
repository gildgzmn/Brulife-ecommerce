import React from 'react';
import { Button } from '@/components/ui/button';

const AllProducts = () => {
    return (
        <div style={styles.allProductsContainer}>
            <div style={styles.filters}>
                <h2 style={styles.filterHeader}>Filters</h2>
                <ul style={styles.filterList}>
                    {['Perfume', 'Chocolate', 'Beverages', 'Food', 'Book', 'Shoes', 'Pet Care', 'Kids', 'Gadgets'].map((item, index) => (
                        <li key={index} style={item === 'Chocolate' ? { ...styles.filterItem, ...styles.selected } : styles.filterItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={styles.products}>
                <h1 style={styles.productHeader}>All Products</h1>
                <div style={styles.productGrid}>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} style={styles.productCard}></div>
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
    },
    filterList: {
        listStyleType: 'none',
        padding: 0,
    },
    filterItem: {
        margin: '10px 0',
        padding: '10px',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    },
    selected: {
        background: '#ccc',
    },
    products: {
        flex: 1,
        padding: '20px',
    },
    productHeader: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
    },
    productCard: {
        width: '100%',
        paddingTop: '100%',
        background: '#e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    loadMore: {
        display: 'block',
        margin: '20px auto',
    },
};

export default AllProducts;
