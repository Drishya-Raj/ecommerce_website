import React, { useState } from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import PaymentMethod from "./paymentMethod";
import ShippingDetails from "./shippingDetails";
import BillingDetails from "./billingDetails";

const Payment = () => {
    const [checked, setChecked] = useState(false);
    const [checkedItem, setCheckedItem] = useState(false);
    const total = useSelector((state) => state.total);

    const handleSubmit = (e) => {
        e.preventDefault();

        let options = {
            key: "rzp_test_fV18BduLiEYRVd",
            key_secret: "GfYRQqOGIlIFTSiFdATEPNHf",
            amount: total * 100,
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
    return (
        <>
            <Navbar />
            <div className="payment">
            <h3>Billing details</h3>
              <BillingDetails/>
                <ShippingDetails setChecked={setChecked} checked={checked} checkedItem={checkedItem} setCheckedItem={setCheckedItem}/>
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
                <PaymentMethod checked={checked} setChecked={setChecked} handleSubmit={handleSubmit} />
            </div>
        </>
    )
}
export default Payment;