import React, { useContext, useEffect, useState } from "react";
import TextInput from "../textInput";
import Button from "../button";
import { creditcard, imagess, inputs } from "../constants/array";
import { Alert } from "../modal/Alert";

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [error, setError] = useState()
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [pincode, setPincode] = useState('');
    const [firstnameAlert, setFirstNameAlert] = useState(false);
    const [lastnameAlert, setLastNameAlert] = useState(false);
    const [emailAlert, setEmailAlert] = useState(false);
    const [amountAlert, setAmountALert] = useState(false);
    const [pincodeAlert, setPincodeAlert] = useState(false);


    const handleClick = () => {
        if (
            firstname === '' ||
            lastname === '' ||
            mobile === '' ||
            email === '' || pincode === ''
        ) {

            setError("Please enter all required fields");
            { showAlert ? (setShowAlert(false)) : setShowAlert(true) }
        }
        validateEmail();
        validateFirstName();
        validateLastName();

    }
    const validateFirstName = () => {
        const usernameRegex = /^[a-zA-Z]+$/;
        (!usernameRegex.test(firstname)) ? setFirstNameAlert('** Enter a valid username **') : setFirstNameAlert('');

    }
    const validateLastName = () => {
        const usernameRegex = /^[a-zA-Z]+$/;
        (!usernameRegex.test(lastname)) ? setLastNameAlert('** Enter a valid username **') : setLastNameAlert('');

    }
    const validateEmail = () => {
        let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        (!emailPattern.test(email)) ? setEmailAlert('** Enter a valid email id **') : setEmailAlert('');
    }
    // const validateMobile = () => {
    //     let phoneregex = ' ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ ';
    //     (phoneregex.test(mobile)) ? setShowAlert('** Enter a valid Phone number **') : setShowAlert('');
    // }
    const validatePincode = () => {
        if (pincode === '') {
            { pincodeAlert ? (setPincodeAlert(false)) : setPincodeAlert(true) }
        }
    }


    const inputs = [
        { id: 1, placeholder: "Enter first name", type: "text", className: "input", value: firstname, onChange: (e) => setFirstName(e.target.value), onInput: validateFirstName, alert: firstnameAlert },
        { id: 2, placeholder: "Enter last name", type: "text", className: "input", value: lastname, onChange: (e) => setLastName(e.target.value), onInput: validateLastName, alert: lastnameAlert },
        { id: 3, placeholder: "Enter mobile number", type: "number", className: "input", value: mobile, onChange: (e) => setMobile(e.target.value), alert: showAlert },
        { id: 4, placeholder: "Enter email address", type: "email", className: "input", value: email, onChange: (e) => setEmail(e.target.value), onInput: validateEmail, alert: emailAlert },
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === "" || isNaN(amount)) {
            setError("Enter amount");
            { amountAlert ? (setAmountALert(false)) : setAmountALert(true) }
            return;
        } else {
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
                    name: "Drishya Raj",
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
        <div className="payment">

            <h3>Billing details</h3>
            {emailAlert && firstnameAlert && lastnameAlert &&  showAlert && <Alert message={{ maincolor: '#e91616;', title: 'Error', text: error }} />}

            <div className="details">

                {inputs.map((item) => (
                    <div className="inputbox" key={item.id}>
                        <TextInput
                            placeholder={item.placeholder}
                            type={item.type}
                            className={item.className}
                            value={item.value}
                            onChange={item.onChange}
                            onInput={item.onInput}
                        />
                        <span className="error" style={{ color: item.alert ? 'red' : 'green' }}>{item.alert}</span>
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
                    value={pincode}
                    onChange={(e)=>setPincode(e.target.value)}
                    onInput={validatePincode}
                />
                <Button value="Place order" className="place-order" onClick={handleClick} />
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
                {amountAlert && <Alert message={{ maincolor: '#e91616', title: 'Error', text: error }} />}
                <Button className="pay" value="Pay now" onClick={handleSubmit} />
            </div>
        </div>
    )
}
export default Payment;