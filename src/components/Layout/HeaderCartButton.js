import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from "./HeaderCartButton.module.css";
import cartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);

  //reduce() method allows to transform an arr of data into a single value
  const numOfCartItem = cartCtx.items.reduce((curNum, item) => {  
    return curNum + item.amount;
  }, 0);


  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}><CartIcon /></span> 
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItem}</span>
    </button>
  )
};

export default HeaderCartButton;
