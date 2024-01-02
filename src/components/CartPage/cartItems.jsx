import * as images from "../images";
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { cartContext } from "../../Router";
import Button from '../button';
import EmptyCart from './EmptyCart';

const CartItems = () => {
    const { addedItems, setAddedItems } = useContext(cartContext);
    const removeItem = (id) => {
        const updatedItems = addedItems.filter((item) => item.id !== id);
        setAddedItems(updatedItems);
    };

    return (
        addedItems.length === 0 ? (
            <div className='cartitems'>
                <EmptyCart />
            </div>) :
            (<div className="cartitems">
                <ul>
                    {addedItems?.map((item) => {
                        const { id, image, title, price, category } = item;
                        return (
                            <div className="cartitems">
                                <li key={id}>
                                    <div className='imgcontainer'>
                                        <img src={image} alt="images" />
                                    </div>
                                    <div className='content'>
                                        <div className='text-items'>
                                            <h4>{title}</h4>
                                            <p>{category}</p>
                                            <div className='buttonitems'>
                                                <Button className="btn1" value="Remove" onClick={() => removeItem(id)} />
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
                                            <p>Price: $ {price}</p>
                                        </div>

                                    </div>

                                </li>
                            </div>)
                    })}
                    <div className='last'>
                        <Link to="/home">
                            <button className='back'>
                                <img src={images?.backarrow} alt="images" />
                                Back to shop</button>
                        </Link>
                    </div>
                </ul>
            </div>)
    )
}
export default CartItems