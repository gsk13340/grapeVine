import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/stylesheet.css'; // Import CSS module

const Header = () => {
    return (
        <header className="header-container">
            <h1 className="logo">GrapeVine</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
