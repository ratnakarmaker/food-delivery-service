import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const cartItems = [
    {
        id: 'c1',
        name: 'Sushi',
        amount: 25,
        price: 12.99,
    },
    {
        id: 'c2',
        name: 'Momo',
        amount: 20,
        price: 15.99,
    }
]

const Cart = (props) => {
    const cartItem = (
        <ul className={classes['cart-items']}>
          {cartItems.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      );

  return (
    <Modal onClose={props.onHideCart}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
};

export default Cart;
