import React from 'react';
import Button from './button';
import SearchBar from './searchBar';
import * as images from './images';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from './constants/array';

const Navbar = () => {
    const location = useLocation();
    console.log("path==", location.pathname);
    const showNavbar =
        location.pathname !== '/' &&
        !['/signIn', '/signUp', '/myCart'].includes(location.pathname);

    return showNavbar ? (
        <div className="navContainer">
            <img src={images?.logo} alt='logo' className="logo" />
            <div className='search-items'>
                <SearchBar />
                <div className='input'>
                    <div className="dropdown">
                        <label htmlFor="all">All category</label>
                        <select name="type">
                            <option value="mensclothing"></option>
                        </select>
                    </div>
                    <Button className="searchbutton" value="Search" />
                </div>
            </div>
            <div className="navActions">
                <ul className="img_container">
                    {navItems.map((item) => (
                        <Link key={item.id} to={item.to}>
                            <li>
                                <img src={item.imgSrc} alt={item.text} />
                                <p>{item.text}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    ) : null;
};

export default Navbar;
