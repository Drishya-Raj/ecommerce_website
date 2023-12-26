import React from 'react';
import SearchBar from './HomePage/searchBar';
import * as images from './images';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from './constants/array';

const Navbar = ({ search = true}) => {
    const location = useLocation();
    const showNavbar = location.pathname !== '/' && ['/payment'] &&
        !['/signIn', '/signUp',].includes(location.pathname);

    return showNavbar ? (
        <div className="navContainer">
            <img src={images?.logo} alt='logo' className="logo" />
            {search && <SearchBar />}
            <div className="navActions">
                <ul className="img_container">
                    {navItems.map((item) => {
                        const { id, imgSrc, text, to } = item;
                        return (
                            <Link key={id} to={to}>
                                <li>
                                    <img src={imgSrc} alt={text} />
                                    <p>{text}</p>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    ) : null
};

export default Navbar;
