import * as images from './images';
import { useLocation } from 'react-router';

const Footer = () => {
    const location = useLocation();
    const showFooter =   location.pathname !== '/' &&
    !['/signIn', '/signUp'].includes(location.pathname);


    return  showFooter?(
        <>
            <footer>
                <div className="left">
                    <ul>
                        <li className="logoContainer"><img src={images?.logo} alt="logo" /></li>
                        <li>Best information about the company gies here but now lorem ipsum is</li>
                        <li>
                            <div className='medias'>
                                <img src={images?.facebook} alt="facebook" />
                                <img src={images?.twitter} alt="twitter" />
                                <img src={images?.linkedin} alt="linkedin" />
                                <img src={images?.youtube} alt='youtube' />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="middle">
                    <ul className="mid">
                        <p>About us</p>
                        <li>Find stores</li>
                        <li>Categories</li>
                        <li>Blogs</li>
                    </ul>
                    <ul className="mid">
                        <p>Partnership</p>
                        <li>Find stores</li>
                        <li>Categories</li>
                        <li>Blogs</li>
                    </ul>
                    <ul className="mid">
                        <p>information</p>
                        <li>Help Center</li>
                        <li>Money refund</li>
                        <li>Shipping</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="mid">
                        <p>For users</p>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Settings</li>
                        <li>My Orders</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <p>Get app</p>
                        <li>
                            <div className='appstore'>
                                <img src={images?.appstore} alt="app" className='app2' />
                            </div>
                        </li>
                        <li>
                            <div className='playstore'>
                                <img src={images?.playstore} alt="playstore" className='play2' />
                            </div>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="footersection">
                <p><span>&copy;</span> 2023 Ecommerce</p>
                <p>
                    <label htmlFor="English">English<img src={images?.america} alt="usa" /></label>
                    <select name="english">
                        <option value="denmark"></option>
                    </select>
                </p>
            </div>
        </>
    ) : null;
}
export default Footer;