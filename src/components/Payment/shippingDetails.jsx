import React from 'react';
import TextInput from '../textInput';

function ShippingDetails({setChecked,checked,checkedItem,setCheckedItem}) {
    return (
        <div className="shipping-details">
        <h4>Shipping Address</h4>
        <p>select the address that match your card or payment method</p>
        <div className="shipping">
            <label>
                <TextInput type="radio" value="Same as billing address" checked={checked} onClick={() => setChecked(!checked)} />
                <span>Same as billing address</span>
            </label>
            <label>
                <TextInput type="radio" value="Use a diffent shipping address" checkedItem={checkedItem} onClick={() => setCheckedItem(!checkedItem)} />
                <span>Use a different shipping address</span>
            </label>
        </div>
    </div>
    )
}

export default ShippingDetails