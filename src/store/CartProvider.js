import React, { useState,useContext ,useEffect } from "react";
import CartContext from "./cartContext";
import AuthContext from "./AuthContext";
const defaultCart={
  products:[],
  totalAmount: 0
}

const CartProvider = (props) => {

    const authcontext = useContext(AuthContext)
    const email = authcontext?.email?.replace(/[^a-zA-Z0-9]/g, "");
    const [cart, setCart] = useState(defaultCart);
    
 
    const calculateTotalAmount =(products)=>{
      if(!products|| products.length===0){
        return 0
      }
      return products.reduce((total,product)=>total +product.amount,0)
    }
    const calculateNumberOfCartItems=(products)=>{
      if(!products|| products.length===0){
        return 0
      }
      return products.reduce((total,product)=> total+ product.quantity,0)
    }
 


    if(!sessionStorage.getItem("fetchExecuted" ) && authcontext.isLoggedIn){
      fetch(`https://cart-data-d4e31-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${email}.json`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(defaultCart)
      })
      sessionStorage.setItem('fetchExecuted',true)


    }
    useEffect(()=>{
      if(!authcontext.isLoggedIn){
        setCart(defaultCart)
      }
    },[])

   

    const fetchCartProducts =async ()=>{
      try{
        const response = await fetch(`https://cart-data-d4e31-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${email}.json`)
        if(!response.ok){
         console.log("Something went wrong while fetching Items from the database");
          } else {
            console.log("Successfully fetched items from the database");
          }
          const data = await response.json()
          console.log(data)
          setCart({
            products:data.products,
            totalAmount:data.totalAmount
          })
      }catch(error){
        console.log(error.message)
      }
    }
    
    useEffect(() => {
      fetchCartProducts();
    }, [email]);
    
   
  const addProductToCart = async (product) => {
if(!product || !product.id|| product.amount){
  console.log("Invalid data")
  return
}


    const existingProducts =  cart.products||[]
   const existingCartItemIndex= existingProducts.findIndex(
    (cartItem)=>cartItem.id === product.id
    )
   
    const existingCartItem = existingProducts[existingCartItemIndex]
    let updatedItems;

    if(existingCartItem){
    const updatedItem={
      ...existingCartItem,
      quantity:existingCartItem.quantity + 1,
      amount: existingCartItem.amount + product.amount,
    }
    updatedItems = [...existingProducts];
    updatedItems[existingCartItemIndex] = updatedItem;

    }else{
      const newProduct ={
        ...product,
        quantity: 1,

      }
      console.log(newProduct)
      updatedItems = existingProducts.concat(newProduct);

    }
    const updatedTotalAmount = calculateTotalAmount(updatedItems)
    setCart({
      products:updatedItems,
      totalAmount:updatedTotalAmount
    })
    
    try{
      const response = await fetch(`https://cart-data-d4e31-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${email}.json`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          products:updatedItems,
          totalAmount:updatedTotalAmount
        })
      })
      if(!response.ok){
        console.log("Something went wrong while adding the item to database")
      }else{
        console.log("successfully added item to the database")
      }
    }catch(error){
      console.log(error.message)
    }
  };
  
  const removeProductFromCart = async(id) => {
    const existingCartItemIndex = cart.products.findIndex(
      (cartItem)=>cartItem.id===id
    )
    const existingItem = cart.products[existingCartItemIndex];
    const updatedTotalAmount = cart.totalAmount - existingItem.amount;
    const updatedItems = cart.products.filter((item) => item.id !== id);
    setCart({
      products: updatedItems,
      totalAmount: updatedTotalAmount,
    });
try{
  const response = await fetch(`https://cart-data-d4e31-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${email}.json`,{
  method:"PUT",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    products:updatedItems,
    totalAmount:updatedTotalAmount
  })
  }
  )
  if(!response.ok){
    console.log("Something went wrong while deleting the item from database")
  }else{
    console.log("Successfully deleted the item from database");
  }

}catch(error){
  console.log(error.message);
}

};

const updateQuantity = async (id, quantity) => {
  const existingCartItemIndex = cart.products.findIndex(
    (cartItem) => cartItem.id === id
  );
  if(existingCartItemIndex===-1){
    console.log(`Item with id${id} not found in the cart`)
    return
  }
  const existingItem = cart.products[existingCartItemIndex]
    const updatedItem={
      ...existingItem,
      quantity:quantity,
      amount : (existingItem.amount/existingItem.quantity) * quantity
    }
    const updatedItems =[...cart.products]
    updatedItems[existingCartItemIndex]= updatedItem
    const updatedTotalAmount = calculateTotalAmount(updatedItems)
      setCart({
        products:updatedItems,
        totalAmount:updatedTotalAmount
      })
      try{
        const response = await fetch(`https://cart-data-d4e31-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${email}.json`,{
          method:'PUT',
          headers:{'Content-Type':"application/json"},
          body:JSON.stringify({
            products:updatedItems,
            totalAmount:updatedTotalAmount
          })
        })
        if(!response.ok){
          console.log("Something went wrong while updating the item in database");

        }else{
          console.log("Successfully updated the item in database");

        }

      }catch(error){
        console.log(error.message)
      }

}




const initialTotalAmount = calculateTotalAmount(cart.products)
const initialNumberOfCartItems= calculateNumberOfCartItems(cart.products)
  
  const cartContext = {
    products: cart.products,
    totalAmount: cart.totalAmount || initialTotalAmount,
    addProduct: addProductToCart,
    removeProduct: removeProductFromCart,
    updateQuantity: updateQuantity,
    getProducts: fetchCartProducts,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;