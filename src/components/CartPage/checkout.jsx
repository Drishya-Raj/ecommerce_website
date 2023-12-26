import React, { useContext } from "react";
import { imagess } from "../constants/array";
import Button from "../button";
import { Link } from "react-router-dom";
import { cartContext } from "../../Router";
import { useDispatch } from "react-redux";
import { setTotal } from "../../Redux/action";

const CheckOut = () => {
  const { addedItems} = useContext(cartContext);
  console.log("addedItems in checkout page", addedItems);
  const dispatch = useDispatch();
  const calculateSubtotal = (addedItems) => {
    const subtotal = addedItems.reduce((total, num) => total + (num.price), 0);
    dispatch(setTotal(subtotal - 60 + 14));
    return subtotal;
  }
  const subtotal = calculateSubtotal(addedItems);

  return (
    addedItems.length !== 0 &&
    <div className="checkout">
      <ul>
        <li>
          <p id="title">Subtotal:</p>
          <p id="price1">${subtotal}</p>
        </li>
        <li>
          <p id="title">Discount:</p>
          <p id="price2">- $60.00</p>
        </li>
        <li>
          <p id="title">Tax:</p>
          <p id="price3">+ $14.00</p>
        </li>
      </ul>
      <div className="total">
        <h4>Total</h4>
        <h4>${subtotal - 60 + 14}</h4>
      </div>
      <Link to="/payment">
        <Button className="checkoutbutton" value="CheckOut" />
      </Link>
      <div className="container">
        {imagess?.map((item) => (
          <div className="imgcontainer" key={item.id}>
            <img src={item.image} alt="images" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckOut;
