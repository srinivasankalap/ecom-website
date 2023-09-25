import React, { Fragment } from 'react';
import {Nav } from 'react-bootstrap';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
            <Link  className='nav-link active'>Home</Link>
            </li>
            <li><Link to="/" className='nav-link active'>Store</Link></li>
            <li><Link to="/About" className='nav-link active'>About</Link></li>
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