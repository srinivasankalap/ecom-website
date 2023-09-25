import React, { Fragment } from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li><NavLink to="/Home"  className='nav-link active'>Home</NavLink></li>
            <li><NavLink to="/" className='nav-link active'>Store</NavLink></li>
            <li><NavLink to="/About" className='nav-link active'>About</NavLink></li>
            <li><NavLink to="/Contact" className='nav-link active'>Contact Us</NavLink></li>
          </ul>
        </nav>
        <div className={classes.button}>
            <HeaderCartButton onClicked={props.onShowCart}/>
            </div>
      </header>
    </Fragment>
  )
}

export default Header;