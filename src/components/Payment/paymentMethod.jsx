import React from 'react';
import TextInput from '../textInput';
import Button from '../button';
import { imagess,creditcard } from '../constants/array';

function PaymentMethod({checked, setChecked, handleSubmit}) {
    return (
        <div className="payment-method">
            <h4>Payment Method</h4>
            <p>All transcations are secure and encrypted</p>
            <div className="card">
                <div>
                    <h3>Credit card </h3>
                    <input type="radio" value="We accept all major credit cards" checked={checked} onClick={() => setChecked(!checked)} />
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
            </div>
            <Button className="pay" value="Pay now" onClick={handleSubmit} />
        </div>
    )
}

export default PaymentMethod;