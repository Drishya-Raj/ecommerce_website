import * as images from './images';
import { Link } from 'react-router-dom'

const Navbar5 = () =>{
    return(
        <div className="navbar5">
            <img src={images?.logo} alt="logo" />
            <div className="navActions">
                <ul className="img_container">
                    <li>
                        <img src={images?.profile} alt="profile" />
                        <p>Profile</p>
                    </li>
                    <li>
                        <img src={images?.msg} alt="msg" />
                        <p>Message</p>
                    </li>
                    <li>
                        <img src={images?.orders} alt="orders" />
                        <p>Orders</p>
                    </li>
                    <Link to="/myCart">
                        <li>
                            <img src={images?.cart} alt="carts" />
                            <p>My Cart</p>
                        </li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}
export default Navbar5;