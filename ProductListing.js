import React, { useState } from "react";
import "./styles.css"; // Ensure to import the CSS file

const sampleProducts = [
  { id: 1, name: "Product 1", image: "product1.jpg", price: 100 },
  { id: 2, name: "Product 2", image: "product2.jpg", price: 120 },
  { id: 3, name: "Product 3", image: "product3.jpg", price: 80 },
  { id: 4, name: "Product 4", image: "product4.jpg", price: 200 },
  { id: 5, name: "Product 5", image: "product5.jpg", price: 150 },
  { id: 6, name: "Product 6", image: "product6.jpg", price: 90 },
  // Add more products as needed
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductListing = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [sortOption, setSortOption] = useState("recommended");

  const sortProducts = (option) => {
    let sortedProducts = [...products];
    if (option === "price-high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "price-low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    // Add other sorting logic if needed
    setProducts(sortedProducts);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    sortProducts(e.target.value);
  };

  return (
    <div className="product-listing">
      <h1>Discover Our Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Arnet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      <div className="filters">
        <div className="filter-category">
          <h3>Categories</h3>
          <ul>
            <li>
              <input type="checkbox" /> Customizable
            </li>
            <li>
              <input type="checkbox" /> Ideal For
            </li>
            <li>
              <input type="checkbox" /> Occasion
            </li>
            <li>
              <input type="checkbox" /> Fabric
            </li>
            <li>
              <input type="checkbox" /> Segment
            </li>
            <li>
              <input type="checkbox" /> Suitable For
            </li>
            <li>
              <input type="checkbox" /> Raw Materials
            </li>
            <li>
              <input type="checkbox" /> Pattern
            </li>
          </ul>
        </div>
        <div className="sort">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="recommended">Recommended</option>
            <option value="newest">Newest First</option>
            <option value="popular">Popular</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="price-low-high">Price: Low to High</option>
          </select>
        </div>
      </div>

      <ProductGrid products={products} />
    </div>
  );
};

export default ProductListing;
