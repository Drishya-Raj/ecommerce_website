import React, { useEffect } from "react";
import ListItem from "./listItems";
import ListViewContent from "./listViewContent";
import * as images from '../images';
import { Link } from 'react-router-dom';
import Seven from '../HomePage/sectionSeven';
import Breadcrumbs from "./BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataSuccess } from "../../Redux/action";
import Navbar from "../navbar";
import NavItem from "../navItems";

const ListView = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataSuccess(data));
    }, [dispatch])

    return (
        <div className="listview">
            <Navbar search={false} />
            <NavItem />
            <div className="navbar3">
                <Breadcrumbs crumbs />
            </div>
            <div className="middle">
                <ListItem />
                <div className="column-flex">
                    <div className="navbar4">
                        <div>
                            <p>12,911 items in <b>Mobile accessory</b></p>
                        </div>
                        <div className="flexss">
                            <p><input type="checkbox" />verified </p>
                            <label htmlFor="feature">Featured
                                <select></select></label>
                            <div className='imgContainer'>
                                <Link to="/listview"><img src={images?.listview} alt="listview" /> </Link>
                                <Link to="/gridview"> <img src={images?.gridview} alt="gridview" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='filter'>
                        <div className="listviewcontent">
                            <ul>
                                {data.map((item) => {
                                    return (
                                        <ListViewContent item={item} wishlist={images.fav1} favorite={images.favorite} />
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Seven />
        </div>

    )
}
export default ListView;