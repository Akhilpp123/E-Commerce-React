<<<<<<< HEAD
<<<<<<< HEAD
//home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './authContext';
import fetchProducts from './fetchproducts'; // Placeholder for actual API call function
=======
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { fetchProducts } from '../../api/products'; // Placeholder for actual API call function
>>>>>>> 83d012c (newcommit)
=======
//home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './authContext';
import fetchProducts from './fetchproducts'; // Placeholder for actual API call function
>>>>>>> 6c72f09 (newcommit)
import ProductList from './productlist';

const Home = () => {
    const { currentUser } = useAuth();
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFeaturedProducts = async () => {
            try {
                setLoading(true);
                const products = await fetchProducts({ featured: true, limit: 5 }); // Fetch featured products, limited to 5
                setFeaturedProducts(products);
            } catch (error) {
                console.error("Error fetching featured products:", error);
            } finally {
                setLoading(false);
            }
        };

        loadFeaturedProducts();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className='px-4 py-14'>
            <h1 className='text-2xl font-bold mb-4'>Welcome, {currentUser.displayName ? currentUser.displayName : "Guest"}!</h1>
            <div>
                <h2 className='text-xl font-semibold mb-3'>Featured Products</h2>
                <ProductList products={featuredProducts} />
            </div>
            <div className="mt-8">
                <Link to="/products" className="text-blue-500 hover:text-blue-700">View all products</Link>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <div>
                <FetchProducts />
            </div>
>>>>>>> 83d012c (newcommit)
=======
>>>>>>> 6c72f09 (newcommit)
        </div>
    );
};

export default Home;
