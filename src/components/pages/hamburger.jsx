import React, { useState } from 'react'
import * as images from '../images';
import { Link , useLocation} from 'react-router-dom';
import Navbar from '../navbar';

function Hamburger() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    console.log("path==", location.pathname);
    const showHamburger =
        location.pathname !== '/' &&
        !['/signIn', '/signUp'].includes(location.pathname);

    return showHamburger? (
        <div className='hamburger'>
            <input type="checkbox" id="check" />
            {open ?
                (
                <div className='hamburgercontent'>
                     
                    <div className='top'>
                        <img src={images?.profile} alt="user" />
                        <Link to="/signUp">
                            <h3>Sign In | Register</h3>
                        </Link>

                    </div>
                    <div className='middle'>
                        <Link to="/home">
                            <p>
                                <i className="fa-solid fa-house"></i>
                                Home
                            </p>
                        </Link>
                        <p>
                            <i className="fa-solid fa-bars"></i>
                            categories
                        </p>

                        <p>
                            <i className="fa-sharp fa-regular fa-heart"></i>
                            Favorites
                        </p>
                        <Link to='/myCart'>
                        <p>
                            <i className="fa-solid fa-cart-shopping"></i>
                            Orders
                        </p>
                        </Link >
                    </div>
                    <div className='bottom'>
                        <p>
                            <i className="fa-solid fa-globe"></i>
                            English | USD
                        </p>
                        <p>
                            <i className="fa-solid fa-headphones-simple"></i>
                            Contact US
                        </p>
                        <p>
                            <i className="fa-solid fa-city"></i>
                            About
                        </p>
                    </div>
                    <p className='last'>User Agreement</p>
                    <p className='last'>Partnership</p>
                    <p className='last'>Privacy policy</p>
                    <label htmlFor='check' className='close-menu' onClick={() => setOpen(false)}>
                        <i className='fas fa-times'></i>
                    </label>
                </div>) :
                (<label htmlFor='check' className='open-menu' onClick={() => setOpen(true)}>
                    <i className='fas fa-bars'></i>
                </label>)}
        </div>
    ):null;
}

export default Hamburger;