import React, { useEffect, useState } from "react";
import Breadcrumbs from "./BreadCrumb";
import TextInput from "./textInput";
import Button from "./button";
import { inputs } from "./constants/array";


const Payment = () => {

    const [loading, setLoading] = useState(true);
    const [cart , setCart] = useState([]);

    return (
        <div className="payment">
            <h2>Basic information</h2>
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
            <Button value="Place order" className="place-order"/>
        </div>

    )
}
export default Payment;