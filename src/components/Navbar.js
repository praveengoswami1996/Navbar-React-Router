import './Navbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const linkActiveStyle = {
        backgroundColor: '#333',
        color: '#fff',
    }

    return (
        <nav className='app__navbar'>
            {/*
            <ul>
                <li> <Link to="/" className='Link'>Home</Link> </li>
                <li> <Link to="/about" className='Link'>About</Link> </li>
                <li> <Link to="/contact" className='Link'>Contact</Link> </li>
            </ul>
            */}
            <ul>
                <li> 
                    <NavLink 
                        to="/"
                        className='Link'
                        onClick={() => setShowDropdown(false)} 
                        style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                    >Home</NavLink> 
                </li>
                <li> 
                    <NavLink 
                        to="/about"
                        className='Link'
                        onClick={() => setShowDropdown(false)}
                        style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                    >About</NavLink> 
                </li>
                <li> 
                    <NavLink 
                        to="/contact"
                        className='Link' 
                        onClick={() => setShowDropdown(false)}
                        style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                    >Contact</NavLink> 
                </li>
                <li> 
                    <div className='app__navbar-nestedlinks'>
                        <button 
                            className='Link'
                            onClick = {() => setShowDropdown(!showDropdown)}
                        >Posts <BsFillCaretDownFill className='icon'/></button>

                        {
                            showDropdown &&
                            <div className='app__navbar-dropdown'>
                                <NavLink 
                                    to="post/mobile" 
                                    className='dropdown-link'
                                    onClick={() => setShowDropdown(false)}
                                >Mobile</NavLink>
                                
                                <NavLink 
                                    to="post/laptop" 
                                    className='dropdown-link'
                                    onClick={() => setShowDropdown(false)}
                                >Laptop</NavLink>
                                
                                <NavLink 
                                    to="post/tablet" 
                                    className='dropdown-link'
                                    onClick={() => setShowDropdown(false)}
                                >Tablet</NavLink>
                            </div>
                        }
                    </div> 
                </li>
                <li> 
                    <NavLink 
                        to="/login"
                        className='Link' 
                        onClick={() => setShowDropdown(false)}
                        style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                    >Login</NavLink> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;