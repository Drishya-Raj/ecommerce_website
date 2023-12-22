import React, { useEffect } from "react";
import Seven from "../HomePage/sectionSeven";
import Button from "../button";
import ProductDescription from "../MensPage/ProductDecsription";
import Navbar from "../navbar";
import NavItem from "../navItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSuccess } from "../../Redux/action";
import * as images from '../images';
import { imageItems } from "../constants/array";
import { Link } from "react-router-dom";
import { reviews, priceDetails, tableDetails, supplier } from "../constants/array";

const ProductDetails = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDataSuccess(data));
    }, [dispatch]);

    return (
        <div className="productdetails">
            <Navbar search={false} />
            <NavItem />
            <div className="Mens">
                <div className="tshirt">
                    <Link to="/myCart">
                        <div className="imgContainer">
                            <img src={images?.tshirts} alt="image34" />
                        </div>
                    </Link>
                    <div className="parts">
                        {imageItems?.map((item) => {
                            const { key, image } = item;
                            return (
                                <img key={key} src={image} alt="images" />);
                        })}
                    </div>
                </div>
                <div className="info">
                    <p>
                        <img src={images?.tick} alt="check" /> In stock
                    </p>
                    <h4>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h4>
                    <div className='middle'>
                        <div className="rating">
                            {reviews.map((item) => {
                                const { id, image, text } = item;
                                return (
                                    <div key={id}>
                                        <img src={image} alt="images" />
                                        <p>{text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="trade">
                            {priceDetails.map((item) => {
                                const { key, price, pieces } = item;
                                return (<div className='price' key={key}>
                                    <h3>{price}</h3>
                                    <p>{pieces}</p>
                                </div>)
                            })}
                        </div>
                        <div className="grid-items">
                            {tableDetails.map((item) => {
                                const { id, text } = item;
                                return (
                                    <p key={id}>{text}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="right">
                        <div className="seller-details">
                            <img src={images?.rimg} alt="rimg" className="rimg" />
                            <div className="sellers">
                                <p>Supplier</p>
                                <p> Guanjoi Trading LLC</p>
                            </div>
                        </div>
                        {supplier?.map((item) => {
                            const { id, image, text } = item;
                            return (
                                <div key={id}>
                                    <img src={image} alt="germany" />
                                    <p>{text}</p>
                                </div>
                            )
                        })}
                        <div className="send">
                            <Button value="Send Enquiry" />
                        </div>
                        <div className="selers">
                            <Button value="Seller's Profile" />
                        </div>
                    </div>
                    <div className="save">
                        <img src={images?.fav} alt="fav" />
                        <h3> Save for later</h3>
                    </div>
                </div>
            </div>
            <ProductDescription />
            <div className="related-products">
                <ul>
                    {data?.map((item, index) => {
                        const { id, image, title, price, category } = item
                        return index < 5 && (
                            <li key={id}>
                                <div className='img-container'>
                                    <img src={image} alt="images" />
                                </div>
                                <h4>{category}</h4>
                                <p>{price}</p>
                                <p>{title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="discount">
                <div className="content">
                    <h2>Super discount on more than 100 USD</h2>
                    <p>Have you ever finally just write dummy info</p>
                </div>
                <Button className="shopbutton" value="Shop now" />
            </div>
            <Seven />
        </div>
    )
}
export default ProductDetails;