import React, { useContext, useEffect, useState } from "react";
import Seven from "../HomePage/sectionSeven";
import Button from "../button";
import ProductDescription from "../MensPage/ProductDecsription";
import Navbar from "../navbar";
import NavItem from "../navItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSuccess, setCartItems, setProductId } from "../../Redux/action";
import * as images from '../images';
import { Link, useNavigate } from "react-router-dom";
import { reviews, priceDetails, tableDetails, supplier } from "../constants/array";
import { cartContext } from "../../Router";
import { Alert } from "../modal/Alert";

const ProductDetails = () => {
    const data = useSelector((state) => state.data);
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    const { productId } = useContext(cartContext);
    const [items, setItems] = useState();
    const [buttonText, setButtonText] = useState("Save for Later");
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        productId && data?.map((item) => {
            return productId === item?.id && setItems(item);
        })
    }, [productId])
  
    const addToCart = () => {
        if (items) {
            const isItemInCart = cartItems.some(item => item.id === items.id);
          {isItemInCart?setShowAlert(true):dispatch(setCartItems(items) ) && setButtonText("Saved");}
          
        }
    }
    return (
        <div className="productdetails">
            <Navbar search={false} />
            <NavItem />
            <div className="Mens">
                <div className="tshirt">
                    <Link to="/myCart">

                        <div className="imgContainer" >
                            {items &&
                                <> <img src={items.image} alt="image" /><br />
                                    <b>{items?.category}</b>
                                    <p> {items?.description}</p></>
                            }

                        </div>

                    </Link>
                    <div className="parts">
                        {/* {items && items?.map((item) => {
                            const { key, image } = item;
                            return (
                                <img key={key} src={image} alt="images" />);
                        })} */}

                    </div>
                </div>
                <div className="info">
                    <p><img src={images?.tick} alt="check" /> In stock</p>
                    <h4>{items && items.title}</h4>
                    <div className='middle'>
                        <div className="rating">
                            {reviews.map((item) => {
                                const { id, image, text } = item;
                                return (
                                    <div key={id} className="rate">
                                        <img src={image} alt="images" />
                                        <span>{text}</span>
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
                        {/* <img src={images?.fav} alt="fav" /> */}
                     <Button className="cart" value={buttonText} onClick={addToCart} />
                        {showAlert && <Alert message={{ maincolor: '#e91616;', title: 'Item already in Cart' }} />}
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