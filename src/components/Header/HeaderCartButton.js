import React, {useContext} from 'react';
import {Button} from 'react-bootstrap'
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cartContext';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
// if i wanna increse cart number then i have to add amount not totalAmount
  const numberOfCartItem = cartCtx.title.reduce((curr, item)=> {
    return curr + item.amount
  }, 0);
  return (
    <div>
      <Button variant="outline-primary" onClick={props.onClicked}>
       <span>Cart</span> 
      </Button>
       <span className={classes.numberNo}>{numberOfCartItem}</span>
    </div>
  )
}

export default HeaderCartButton