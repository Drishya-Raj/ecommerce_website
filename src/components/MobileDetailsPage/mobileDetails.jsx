import ListItem from './listItems'
import Seven from "../HomePage/sectionSeven";
import * as images from '../images'
import Breadcrumbs from "./BreadCrumb";
import Navbar from "../navbar";
import NavItem from "../navItems";
import { useDispatch, useSelector } from "react-redux";
import ProductRenderItem from './ProductRenderItem';
import { fetchDataSuccess, setFilterData } from "../../Redux/action";
import ListViewContent from './listViewContent';
import { useEffect, useState } from "react";
import TextInput from '../textInput';

const MobDetails = () => {
    const data = useSelector((state) => state.data);
    const filterData = useSelector((state) => state.filterData);
    const dispatch = useDispatch();
    const [isGridView, setIsGridView] = useState(true);
    const [filteredItems, setFilteredItems] = useState(data);
    const [cart,setCart] = useState()

    useEffect(() => {
        dispatch(fetchDataSuccess(data));
        dispatch(setFilterData(filterData));
        setFilteredItems(filterData && filterData.length > 0 ? filterData : data);
    }, [dispatch, data, filterData]);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

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
                            <TextInput type="checkbox" value='verified' />
                            <span>verified</span>
                            <label htmlFor="feature">Featured
                                <select></select></label>
                            <div className='imgContainer'>
                                <div onClick={toggleView}>
                                    {isGridView ? (<img src={images.listview} />) : <img src={images.gridview} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    {isGridView ? (
                        <div className="productCart">
                            <ul>
                                {filteredItems?.map((item,index) => {
                                    return index <= 8 &&
                                        <ProductRenderItem
                                            item={item}
                                            wishlist={images.fav1}
                                            favorite={images.favorite}
                                        />
                                })}
                            </ul>
                        </div>
                    ) : (
                        <div className='filter'>
                            <div className="listviewcontent">
                                <ul>
                                    {filteredItems?.map((item, index) => {
                                        return index > 0 && index < 5 && (
                                            <ListViewContent
                                                key={index}
                                                item={item}
                                                wishlist={images.favorite}
                                                favorite={images.fav1}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Seven />
        </div>
    )
}
export default MobDetails;