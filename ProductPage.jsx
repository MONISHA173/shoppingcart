import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/250', price: 19.99 },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/250', price: 29.99 },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/250', price: 14.99 },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/250', price: 39.99 },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/250', price: 24.99 },
    { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/250', price: 19.99 },
  ]);

  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredProducts = selectedFilter === 'all'
    ? products
    : products.filter(product => product.name.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div className="container">
      <div className="filters">
        <select value={selectedFilter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="product 1">Product 1</option>
          <option value="product 2">Product 2</option>
          {/* Add more filter options here */}
        </select>
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;