import { useState } from "react";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";
import ProductCard from "../components/ItemList/ProductCard";
import Header from "../components/Header/Header";

const Home=()=>{
    const [showCart, setShowCart] = useState(false);
    const ShowCartHandler =()=> setShowCart(true)
    const HideCartShownHandler =()=> setShowCart(false)
    return(
        <CartProvider>
       {showCart && <Cart showCart={ShowCartHandler} onCloseCart={HideCartShownHandler}/>}
    <Header onShowCart={ShowCartHandler}/>
    <div className="container" style={{marginTop: 150}}>
      <h1>Products</h1>
      <ProductCard />
    </div>
    </CartProvider>
    )
}

export default Home;