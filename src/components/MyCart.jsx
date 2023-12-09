import React, { createContext, useState } from "react";
import CartItems from "./cartItems";
import CheckOut from "./checkout";
import Navbar5 from "./navbar5";
import Seven from "./sectionSeven";
import Button from "./button";
import { save } from "./constants/array";
import { DeliveryItems } from "./constants/renderItems";

export const cartContext = createContext();

const MyCart = () => {

    const [buttontext, setButtontext] = useState(save);
    const [addedItems, setAddedItems] = useState([]);

    const addToCart = (index) => {
        const updatedBtext = [...buttontext];
        const newItem = updatedBtext[index];
        console.log("updatedBtext", updatedBtext);
        console.log("newItem ", newItem );
    
        if (!addedItems.some((item) => item.id === newItem.id)) {
            setAddedItems((prevItems) => [...prevItems, newItem]);
            console.log("adddddddddddddd", addedItems);
        }
    
        updatedBtext.find(item => item.id === newItem.id).button =
        updatedBtext.find(item => item.id === newItem.id).button === "Move to cart" ? "Added" : "Move to cart";
        
        setButtontext(updatedBtext);
    };
    

    console.log("addedItems", addedItems);


    return (
        <div className="mycart">
            <Navbar5 />
            <div className="flex">
                <cartContext.Provider value={{addedItems, setAddedItems}}>
                    <CartItems />
                </cartContext.Provider>
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
                <ul>
                    {save.map((item, index) => (
                        <li key={item.id}>
                            <div className='imgcontainer'>
                                <img src={item.image} alt="images" />
                            </div>
                            <div className='content'>
                                <h4>{item.price}</h4>
                                <p>{item.text}</p>
                                <button className="cartbutton" onClick={() => addToCart(index, item.id)}>
                                    <i class="fa-solid fa-cart-shopping"></i>{item.button}
                                </button>
                            </div>
                        </li>
                    ))}
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