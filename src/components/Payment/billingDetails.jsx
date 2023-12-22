import React from 'react'
import { useState } from 'react';
import TextInput from '../textInput';
import Button from '../button';
import { states,country } from '../constants/array';

function BillingDetails() {
    const [showAlert, setShowAlert] = useState(false);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [mobile, setMobile] = useState('');
    const [pincode, setPincode] = useState('');
    const [firstnameAlert, setFirstNameAlert] = useState(false);
    const [lastnameAlert, setLastNameAlert] = useState(false);
    const [emailAlert, setEmailAlert] = useState(false);
    const [pincodeAlert, setPincodeAlert] = useState(false);
   
   
    const handleClick = () => {
        if (
            firstname === '' || lastname === '' || mobile === '' || email === '' || pincode === '') {
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

    const validatePincode = () => {
        if (pincode === '') {
            { pincodeAlert ? (setPincodeAlert(false)) : setPincodeAlert(true) }
        }
    }
    const validateMobile = () => {
        if (mobile === '') {
            { showAlert ? (setShowAlert(false)) : setShowAlert(true) }
        }
    }
    const inputs = [
        { id: 1, placeholder: "Enter first name", type: "text", className: "input", value: firstname, onChange: (e) => setFirstName(e.target.value), onInput: validateFirstName, alert: firstnameAlert },
        { id: 2, placeholder: "Enter last name", type: "text", className: "input", value: lastname, onChange: (e) => setLastName(e.target.value), onInput: validateLastName, alert: lastnameAlert },
        { id: 3, placeholder: "Enter mobile number", type: "number", className: "input", value: mobile, onChange: (e) => setMobile(e.target.value), onInput: validateMobile, alert: showAlert },
        { id: 4, placeholder: "Enter email address", type: "email", className: "input", value: email, onChange: (e) => setEmail(e.target.value), onInput: validateEmail, alert: emailAlert },
    ];
    return (
        <>
            <div className="details">
                {inputs?.map((item) => (
                    <div className="inputbox" key={item?.id}>
                        <TextInput
                            placeholder={item?.placeholder}
                            type={item?.type}
                            className={item?.className}
                            value={item?.value}
                            onChange={item?.onChange}
                            onInput={item?.onInput}
                        />
                        <span className="error" style={{ color: item?.alert ? 'red' : 'green' }}>{item.alert}</span>
                    </div>
                ))}
                <textarea placeholder="Enter address" className="input"></textarea>
                <select name="state" className="input">State
                    {states?.map((item) => (
                        <option key={item.id}>{item.state}</option>
                    ))}
                </select>
                <select name="country" className="input">
                    {country?.map((item) => (
                        <option key={item?.id}>{item?.country}</option>
                    ))}
                </select>
                <TextInput
                    placeholder="pincode"
                    className="input"
                    type="number"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    onInput={validatePincode}
                    alert={showAlert}
                />
                <span className="error" style={{ color: showAlert ? 'red' : 'green' }}>{showAlert}</span>
                <Button value="Place order" className="place-order" onClick={handleClick} />
            </div>
        </>
    )
}

export default BillingDetails