import React, { useContext} from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import CartContext from "../../store/cartContext";

const Header = (props) => {
 
  const authcontext = useContext(AuthContext);
  const cartcontext =useContext(CartContext);
const navigate = useNavigate()
  
  const logoutHandler = () => {
    authcontext.logout();
    navigate("/auth",{replace:true})
    
  };
  
  const totalQuantity = cartcontext.products? 
  cartcontext.products.reduce(
    (prevValue, currItem) =>{
      const quantity = Number(currItem.quantity)
      
      if(isNaN(quantity)){
        return prevValue
      }
     
      return prevValue + quantity
    } ,0
    
    ):0;



  const location = useLocation()
  return (
    <>
      <Navbar
      bg="dark" data-bs-theme="dark"
        style={{ boxSshadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <Container>
          <Navbar.Brand href="#" className="b">
            The Generics
          </Navbar.Brand>
          <Nav className="me-auto ">
            <NavLink to="/" style={{textDecoration:'none'}} >
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            </NavLink>

            <NavLink to="/" className="nav-link">
              Store
            </NavLink>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </Nav>
          {authcontext.isLoggedIn &&
          location.pathname !== "/home" &&
          location.pathname !== "/about" &&
          location.pathname !== "/contact" &&
          location.pathname !== "/auth" && (
                <div className="d-flex w-auto mb-3 ">
                <HeaderCartButton onOpenCart={props.onOpenCart} totalQuantity={totalQuantity} />
              </div>
              )
            }
         
         {authcontext.isLoggedIn && location.pathname !== "/auth" && (
            <Button
              style={{
                fontSize: "1.3rem",
                marginLeft: "0.50rem",
                backgroundColor: "transparent",
                border: "none",
              }}
              className="d-flex w-auto mb-3 "
              onClick={logoutHandler}
            >
              <FiLogOut style={{ color: "#ff3f6c" }} />
            </Button>
          )}
          
        </Container>
     
      </Navbar>
    </>
  );
};

export default Header;