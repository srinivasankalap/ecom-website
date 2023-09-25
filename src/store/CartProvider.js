import React, {useReducer} from 'react'
import CartContext from './cartContext';

const defaultCart = {
  title: [],
  totalAmount: 0
}

const cartReducer = (state, action) =>{
  if(action.type === 'ADD'){
    const updatedItem = state.title.concat(action.title);
    const updatedAmount = state.totalAmount + action.title.price* action.title.amount;
    return{
      title: updatedItem,
      totalAmount: updatedAmount
    }
  }
  return defaultCart
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart)

    const addItemHandler = title =>{
      dispatchCartAction({type : 'ADD', title : title})
    };
    const removeItemHandler = id =>{
      dispatchCartAction({type: 'REMOVE', id : id})
    };

    const cartItem = {
      title : cartState.title,
        totalAmount : cartState.price,
        addItem : addItemHandler,
        removeItem : removeItemHandler,
    }

  return (
    <CartContext.Provider value={cartItem}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider