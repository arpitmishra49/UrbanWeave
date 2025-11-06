import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from "../Assets/dropdown_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const navigate = useNavigate();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <p>UrbanWeave</p>
      </div>

      <img onClick={dropdown_toggle} src={nav_dropdown} alt="Menu Toggle"/>

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link to='/'>Shop</Link>{menu === "shop" && <hr/>}</li>
        <li onClick={() => setMenu("mens")}><Link to='/mens'>Men</Link>{menu === "mens" && <hr/>}</li>
        <li onClick={() => setMenu("womens")}><Link to='/womens'>Women</Link>{menu === "womens" && <hr/>}</li>
        <li onClick={() => setMenu("kids")}><Link to='/kids'>Kids</Link>{menu === "kids" && <hr/>}</li>
      </ul>

      <div className="nav-login-cart">
        {
          localStorage.getItem('auth-token')
            ? <button onClick={handleLogout}>Logout</button>
            : <Link to="/login"><button>Login</button></Link>
        }

        <Link to="/cart"><img src={cart_icon} alt="Cart"/></Link>
        <div className="nav-count-cart">{getTotalCartItems() || 0}</div>
      </div>
    </div>
  )
}

export default Navbar;
