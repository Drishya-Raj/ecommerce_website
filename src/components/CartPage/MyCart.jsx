import React, { useContext, useState } from "react";
import CartItems from "./cartItems";
import CheckOut from "./checkout";
import Seven from "../HomePage/sectionSeven";
import Button from "../button";
import { DeliveryItems } from "../constants/renderItems";
import Navbar from "../navbar";
import { cartContext } from "../../Router";
import { useSelector } from "react-redux";

const MyCart = () => {
    const { addedItems, setAddedItems } = useContext(cartContext);
    const cartItems = useSelector((state) => state.cartItems);
    const addToCart = (index) => {
        const updatedItem = [...cartItems];
        const newItem = updatedItem[index];
        if (!addedItems.some((item) => item.id === newItem.id)) {
            setAddedItems((prevItems) => [...prevItems, newItem]);
        }
    };
    return (
        <div className="mycart">
            <Navbar search={false} />
            <div className="flex">
                <CartItems />
                <div className="columnflex">
                    <div className="coupon">
                        <p>Have a coupon ?</p>
                        <div className="box">
                            <button className="btn1">Add coupon</button>
                            <button className="btn2">Apply</button>
                        </div>
                    </div>
                    <CheckOut />
                </div>
            </div>
            <DeliveryItems />
            
            <div className="savedItem">
            <h2>Saved for Later</h2><br/>
                <ul>
                    {cartItems.map((item, index) => {
                        const { id, image, price, title, category, button } = item;
                        return (
                            <li key={id}>
                                <div className='imgcontainer'>
                                    <img src={image} alt="images" />
                                </div>
                                <div className='content'>
                                    <h4>${price}</h4>
                                    <p>{title}</p>
                                    <p>{category}</p>
                                    <button className="cartbutton" onClick={() => addToCart(index, id)}>
                                        <i class="fa-solid fa-cart-shopping"></i>Move to cart
                                    </button>
                                </div>
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
export default MyCart;