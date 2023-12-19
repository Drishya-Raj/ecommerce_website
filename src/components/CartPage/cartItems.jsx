import * as images from "../images";
import React, {useMemo} from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from "./MyCart";
import Button from '../button';
import EmptyCart from './EmptyCart';

const CartItems = () => {
    const { addedItems, setAddedItems } = useContext(cartContext);
    useMemo(() => {
        localStorage.setItem("addedItems", JSON.stringify(addedItems));
      }, [addedItems]);
   
    const removeItem = (id) => {
        const updatedItems = addedItems.filter((item) => item.id !== id);
        console.log("updatee", updatedItems);
        setAddedItems(updatedItems);
    };

    return (
        addedItems.length === 0 ? (
            <div className='cartitems'>
                <EmptyCart />
            </div>) :
            (<div className="cartitems">
                <ul>
                    {addedItems.map((item, index) => (
                        <div className="cartitems">
                            <li key={item.id}>
                                <div className='imgcontainer'>
                                    <img src={item.image} alt="images" />
                                </div>
                                <div className='content'>
                                    <div className='text-items'>
                                        <h4>{item.text}</h4>
                                        <div className='buttonitems'>
                                        <Button className="btn1" value="Remove" onClick={() => removeItem(item.id)} />
                                        </div>
                                    </div>
                                    <div className='left'>
                                        <label htmlFor='quantity'> Quantity
                                            <select name="quantity">
                                                <option vlaue="select"></option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </label>
                                        <p>{item.price}</p>
                                    </div>

                                </div>

                            </li>
                        </div>
                    ))}
                    <div className='last'>
                        <Link to="/home">
                            <button className='back'>
                                <img src={images?.backarrow} alt="images" />
                                Back to shop</button>
                        </Link>
                        {/* <button className='remove' >Remove all</button> */}
                    </div>
                </ul>


            </div>)
    )
}
export default CartItems