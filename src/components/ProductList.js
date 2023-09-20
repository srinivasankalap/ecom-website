import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
