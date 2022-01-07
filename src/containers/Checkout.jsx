import React, {useContext} from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import '../styles/components/Checkout.styl';
import AppContext from '../context/AppContext';

const Checkout = (props) => {
  const { cart } = useContext(AppContext);
  console.log(cart);
  const products = [...cart.productsCart];

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = products.reduce(reducer, 0);
    return sum;
  };

  const remove = product => () => {
    cart.setProductsCart(products.filter((item) => {
      return item.id !== product.id;
    }));
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {products.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {products.map(item => (
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button
              type="button"
              onClick={remove(item)}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {products.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>
            {`Precio Total: $ ${handleSumTotal()}`}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Checkout;
