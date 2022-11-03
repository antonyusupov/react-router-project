import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine, RiShoppingCart2Fill, RiLoginCircleFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='universe__navbar'>
      <div className='universe__navbar-logo'>
        <Link to='/'>
          <h3>Logo</h3>
        </Link>
      </div>
      <div className='universe__navbar-links'>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/about'>
          <p>About</p>
        </Link>
        <Link to='/products'>
          <p>Products</p>
        </Link>
        <Link to='/blog'>
          <p>Blog</p>
        </Link>
        <Link to='/contact'>
          <p>Contact</p>
        </Link>
      </div>
      <div className='universe__navbar-icons'>
        <p><RiShoppingCart2Fill size={20} /></p>
        <p><RiLoginCircleFill size={20} /></p>
      </div>
      <div className='universe__responsive-menu'>
        { toggleMenu 
          ? <RiCloseLine color='#fff' size={25} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={25} onClick = {()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='universe__responsive-menu_container'>
            <div className='universe__responsive-menu_container-links'>
            <Link to='/'>
              <p>Home</p>
            </Link>
            <Link to='/about'>
              <p>About</p>
            </Link>
            <Link to='/products'>
              <p>Products</p>
            </Link>
            <Link to='/blog'>
              <p>Blog</p>
            </Link>
            <Link to='/contact'>
              <p>Contact</p>
            </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;