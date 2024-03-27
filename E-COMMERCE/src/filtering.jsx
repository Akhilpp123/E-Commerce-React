import React, { useState, useEffect } from 'react';

const ProductsPage = (props) => {
  const [sortBy, setSortBy] = useState('price');

  // Ensure a new array is created for sorting to avoid direct mutation of props
  const getSortedProducts = () => {
    const productsCopy = [...props.products];
    switch (sortBy) {
      case 'price':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'popularity':
        return productsCopy.sort((a, b) => b.popularity - a.popularity);
      case 'releaseDate':
        return productsCopy.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
      default:
        return productsCopy;
    }
  };

  const sortedProducts = getSortedProducts();

  return (
    <div>
      <h1>Sort Products by: {sortBy}</h1>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
            <option value="releaseDate">Release Date</option>
          </select>
        </label>
      </div>
    </div>
  );
}

// Assume 'products' prop is provided as shown previously
export default ProductsPage;
