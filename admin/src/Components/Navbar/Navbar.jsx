import React from 'react'
import './Navbar.css'
import navProfile from '../../assets/nav-profile.svg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <p>Admin Panel</p>
            </div>
            <img src={navProfile} alt="" className="nav-profile" />

        </div>
    )
}
export default Navbar