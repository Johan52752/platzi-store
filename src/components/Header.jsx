import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.styl';
import logo from '../assets/logo-gndx.png';

const Header = (props) => {
  const { cart } = useContext(AppContext);
  const products = [...cart.productsCart];
  return (
    <div className="Header">
      <h1 className="Header-title">
        <img src={logo} alt="Logo" width="32" />
        <Link to="/">Platzi Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {products.length > 0 && (
          <div className="Header-alert">{products.length}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
