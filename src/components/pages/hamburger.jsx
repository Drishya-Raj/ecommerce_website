import React, { useState } from 'react'
import * as images from '../images';
import { Link , useLocation ,useNavigate} from 'react-router-dom';

function Hamburger() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("path==", location.pathname);
    const showHamburger =
        location.pathname !== '/' &&
        !['/signIn', '/signUp'].includes(location.pathname);

    return showHamburger && 
        <div className='hamburger'>
        <img src={images.logo} alt="images" style={{position:'absolute', left:'30px' , paddingTop:'10px' }}/>
            <input type="checkbox" id="check" />
            {open ?
                (<div className='hamburgercontent'>
                    <div className='top'>
                        <img src={images?.profile} alt="user" />
                            <h3 onClick={"/signUp"}>Sign In | Register</h3>
                    </div>
                    <div className='middle'>
                            <p onClick={()=>navigate("/home")}>
                                <i className="fa-solid fa-house"></i>
                                Home
                            </p>
                        <p><i className="fa-solid fa-bars"></i>Categories   </p>
                        <p><i className="fa-sharp fa-regular fa-heart"></i> Favorites</p>
                        <p onClick={()=>navigate('/myCart')}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            Orders
                        </p>
                    </div>
                    <div className='bottom'>
                        <p> <i className="fa-solid fa-globe"></i> English | USD </p>
                        <p><i className="fa-solid fa-headphones-simple"></i>Contact US </p>
                        <p><i className="fa-solid fa-city"></i> About</p>
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
        
}

export default Hamburger;