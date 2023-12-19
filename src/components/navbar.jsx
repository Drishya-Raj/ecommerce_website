import React from 'react';
import Button from './button';
import SearchBar from './HomePage/searchBar';
import * as images from './images';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from './constants/array';

const Navbar = ({ search = true, mobile }) => {
    const location = useLocation();
    const showFooter = location.pathname !== '/' && ['/payment'] &&
        !['/signIn', '/signUp',].includes(location.pathname);
    const filterArray = navItems.filter((item) => (item.id === 1 || item.id === 4));

    return showFooter ? (
        <div className="navContainer">
            <img src={images?.logo} alt='logo' className="logo" />

            {search &&
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
                </div>}
            <div className="navActions">
                {!mobile ? (
                    <ul className="img_container">
                        {navItems.map((item) => {
                            const {id,imgSrc,text,to} = item;
                           return(
                            <Link key={id} to={to}>
                            <li>
                                <img src={imgSrc} alt={text} />
                                <p>{text}</p>
                            </li>
                        </Link>
                           )
})}
                    </ul>
                ) : (
                    <ul className="img_container">
                        {filterArray.map((item) => {
                            const { id, imgSrc, text ,to} = item;
                            return (<Link key={id} to={to}>
                                <li>
                                    <img src={imgSrc} alt={text} />
                                    <p>{text}</p>
                                </li>
                            </Link>)
                        })}
                    </ul>
                )}

            </div>
        </div>
    ) : null
};

export default Navbar;
