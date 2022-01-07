import React, { useContext } from 'react';
import '../styles/components/Products.styl';
import Product from './Product';
import AppContext from '../context/AppContext';

const Products = () => {
  const { products, cart } = useContext(AppContext);
  const handleAddToCart = product => () => {
    cart.setProductsCart([...cart.productsCart, product]);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
