import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import squarefeet from './navbar images/21SQFT B 1.png'
import circle from './navbar images/Ellipse 1.png'
import search from './navbar images/Group 2.png'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu); // Toggle menu visibility
    };

    return (
        <div>
            <div className={`navbar h-nav-resp ${showMenu ? 'show-menu' : ''}`}>
                <div className='div-1'>
                    <img className='squarefeet' src={squarefeet} alt=""></img>
                </div>
                <div className='div-2'>
                    <ul className={`navbar-ul v-class-resp ${showMenu ? 'show-menu' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/category">Categories</Link></li>
                        <li><Link to="/blog">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <img className='circle' src={circle} alt=''></img>
                    <img className='search' src={search} alt=''></img>
                    <button className='nav-btn'>Register</button>
                </div>
                <div className="burger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
