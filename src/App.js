import {Suspense, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';
import Store from "./Pages/Store";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Authentication from "./components/Auth/Authentication";
import { useContext } from "react";
import AuthContext from "./store/AuthContext";

function App() {
  const authcontext = useContext(AuthContext)
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };
  const hideCardHandler = () => {
    setOpenCart(false);
  };

  return (
    <CartProvider>
      <Header onOpenCart={openCartHandler} />
      <Suspense fallback={<div>Loading...</div>}>
      {openCart && <Cart openCart={openCart} onHindeCart={hideCardHandler} />}
      <Routes>
        <>
        {authcontext.isLoggedIn ? (
           <>
            <Route path="/home" element={<Home />} />
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </>
          ): (
            <Route path="*" element={<Navigate to="/auth" />} />
          )}
          {!authcontext.isLoggedIn && <Route path="/auth" element={<Authentication />}/>}
           </>
      </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;