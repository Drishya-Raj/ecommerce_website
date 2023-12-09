import ListItem from "./listItems";
import ProductCart from "./productCart";
import Navbar2 from "./navBar2";
import Seven from "./sectionSeven";
import { Link } from 'react-router-dom';
import * as images from './images'
import { useState } from "react";
import Breadcrumbs from "./BreadCrumb";
const MobDetails = () => {

    return (
        <div className="mobDetails">
            <Navbar2 />
            <div className="navbar3">
                <Breadcrumbs />
            </div>
            <div className="middle">
                <ListItem />
                <div className="column-flex">
                    <div className="navbar4">
                        <div>
                            <p>12,911 items in <b>Mobile accessory</b></p>
                        </div>
                        <div className="flexss">
                            <p>
                                <input
                                    type="checkbox" />
                                verified
                            </p>
                            <label htmlFor="feature">Featured
                                <select></select></label>
                            <div className='imgContainer'>
                                <Link to="/listview">
                                    <img src={images?.listview} alt="listview" />
                                </Link>
                                <Link to="/gridview" >
                                    <img src={images?.gridview} alt="gridview" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <FilterSection /> */}
                    <ProductCart />
                </div>
            </div>
            <Seven />
        </div>
    )
}
export default MobDetails;