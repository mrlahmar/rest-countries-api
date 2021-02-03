import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <nav className={`site-nav ${darkTheme && 'dark'}`}>
            <h1 className={`${darkTheme && 'dark'}`}>Where in the world?</h1>
            <div>
                <FontAwesomeIcon className='icon' icon={faMoon} color={darkTheme ? "white" : "black"}/>
                <p className={`${darkTheme && 'dark'}`} onClick={() => setDarkTheme(!darkTheme)}>{ darkTheme ? "Light Mode" : "Dark Mode"}</p>
            </div>
        </nav>
    );
}

export default Navbar;