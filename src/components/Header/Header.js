import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <h2>Class 9 Books of English Version</h2>
        </header>
    );
};

export default Header;