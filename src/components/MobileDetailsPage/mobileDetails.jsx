import ListItem from './listItems'
import Seven from "../HomePage/sectionSeven";
import { Link, useNavigate } from 'react-router-dom';
import * as images from '../images'
import Breadcrumbs from "./BreadCrumb";
import Navbar from "../navbar";
import NavItem from "../navItems";
import { useDispatch, useSelector } from "react-redux";
import ProductRenderItem from "../ProductRenderItem";
import { fetchDataSuccess } from "../../Redux/action";
import ListViewContent from './listViewContent';
import { useEffect } from "react";


const MobDetails = () => {

    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isGridView = false;

    useEffect(() => {
        dispatch(fetchDataSuccess(data));
    }, [dispatch])

    return (
        <div className="mobDetails">
            <Navbar search={true} />
            <NavItem />
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
                                <Link to="/listview"><img src={images?.listview} alt="listview" />{' '} </Link>
                                <Link to="/gridview" ><img src={images?.gridview} alt="gridview" />{' '}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="productCart">
                            <ul>
                                {data.map((item, index) => {
                                    return <ProductRenderItem
                                        key={index}
                                        item={item}
                                        wishlist={images.fav1}
                                        favorite={images.favorite}
                                    />
                                })}
                            </ul>
                        </div>
                    {/* <div className={isGridView ? 'productCart' : 'filter'}>
                        ( <div className="productCart">
                            <ul>
                                {data.map((item, index) => {
                                    return <ProductRenderItem
                                        key={index}
                                        item={item}
                                        wishlist={images.fav1}
                                        favorite={images.favorite}
                                    />
                                })}
                            </ul>
                        </div>): (<div className='filter'>
                            <div className="listviewcontent">
                                <ul>
                                    {data.map((item, index) => {
                                        return (
                                            <ListViewContent key={index} item={item} wishlist={images.fav1} favorite={images.favorite} />
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>)
                    </div> */}
                </div>
            </div>
            <Seven />
        </div>
    )
}
export default MobDetails;