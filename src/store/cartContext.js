import React from 'react'

const CartContext = React.createContext({
    title : [],
    totalAmount: 0,
    addItem : (item)=>{},
    removeItem: id => {}
})

export default CartContext ;