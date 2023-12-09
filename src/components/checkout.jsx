import { imagess } from "./constants/array";
import Button from "./button";

const CheckOut = () => {
 
    return (
        <div className="checkout">
            <ul>
                <li>
                    <p id="title">Subtotal:</p>
                    <p id="price1">$1403.97</p>
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
                <h4>$1357.97</h4>
            </div>
            <Button className="checkoutbutton" value="CheckOut"/>
            <div className="container">

                {imagess?.map((item) => (
                    <div className="imgcontainer">
                        <img src={item.image} alt="images" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CheckOut;