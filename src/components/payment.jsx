import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "./BreadCrumb";
import TextInput from "./textInput";
import Button from "./button";
import { creditcard, imagess, inputs } from "./constants/array";

const Payment = () => {
    const [amount, setAmount] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount !== "") {
            let options = {
                key: "rzp_test_fV18BduLiEYRVd",
                key_secret: "GfYRQqOGIlIFTSiFdATEPNHf",
                amount: amount * 100,
                currency: "INR",
                name: "Ecommerce_Website",
                description: "for testing purpose",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name: "Drishya",
                    email: "drishya@gmail.com",
                    contact: 9987654321
                },
                notes: {
                    address: "Razorpay corporate office"
                },
                theme: {
                    color: "#3399cc"
                }

            };
            let pay = new window.Razorpay(options);
            pay.open();
        }
    }

    return (
        <div className="payment-gateway">
            <div className="payment">
                <h3>Billing details</h3>
                <div className="details">
                    {inputs.map((item) => (
                        <div className="inputbox" key={item.id}>
                            <TextInput
                                placeholder={item.placeholder}
                                type={item.type}
                                className={item.className}
                            />
                        </div>
                    ))}
                    <textarea placeholder="Enter address" className="input"></textarea>
                    <select name="state" className="input">State
                        <option value="select">State</option>
                        <option value="Kerala">Kerala</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="Tamilnadu">Tamilnadu</option>
                        <option value="Andra Pradesh">Andra Pradesh</option>
                    </select>
                    <select name="country" className="input">
                        <option value="Country">Country</option>
                        <option value="India">India</option>
                        <option value="china">China</option>
                        <option value="pakistan">Pakisthan</option>
                        <option value="Afghanisthan">Afghanisthan</option>
                    </select>
                    <TextInput
                        placeholder="pincode"
                        className="input"
                        type="number"
                    />

                </div>
                <div className="shipping-details">
                    <h4>Shipping Address</h4>
                    <p>select the address that match your card or payment method</p>
                    <div className="shipping">
                        <label>
                            <TextInput type="radio" value="Same as billing address" />
                            <p>Same as billing address</p>
                        </label>
                        <label>
                            <TextInput type="radio" value="Use a diffent shipping address" />
                            <p>  Use a diffent shipping address</p>
                        </label>
                    </div>
                </div>
                <div className="shipping-method">
                    <h4>Shipping method</h4>
                    <div className="method">
                        <b>Arrives by Monday , December 20</b>
                        <div className="pay">
                            <p>Additional charges may apply</p>
                            <p>$5.00</p>
                        </div>

                    </div>

                </div>
                <div className="payment-method">
                    <h4>Payment Method</h4>
                    <p>All transcations are secure and encrypted</p>
                    <div className="card">
                        <div>
                            <h3>Credit card </h3>
                            <input type="radio" value="We accept all major credit cards" />
                            <span>We accept all major credit cards</span>
                        </div>
                        <ul>
                            {imagess.map((item) => (
                                <li key={item.id} >
                                    <div className="img-container">
                                        <img src={item.image} alt="payment-method" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="creditcard">
                            {creditcard.map((item) => (
                                <li key={item.id}>
                                    <TextInput
                                        type={item.type}
                                        placeholder={item.placeholder}
                                        className="input"
                                    />
                                </li>
                            ))}
                        </div>
                        <TextInput
                            type="text"
                            placeholder="$ Enter amount"
                            className="input"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <Button className="pay" value="Pay now" onClick={handleSubmit} />
                </div>
            </div>
        </div>

    )
}
export default Payment;