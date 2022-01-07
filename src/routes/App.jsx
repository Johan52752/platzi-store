import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const App = () => {
  const { products } = useInitialState();
  const [productsCart, setProductsCart] = useState([]);
  const cart = { productsCart, setProductsCart };
  return (
    <>
      {products.length > 0 ? (
        <Suspense fallback={<div>Loading...</div>}>
          <AppContext.Provider value={{ products, cart }}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route
                    exact
                    path="/checkout"
                    element={<Checkout />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </AppContext.Provider>
        </Suspense>
      ) : (
        <h1>Loading ...</h1>
      )}
    </>
  );
};

export default hot(App);
