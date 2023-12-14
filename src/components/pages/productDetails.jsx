import React from "react";
import Navbar2 from "../navBar2";
import { products } from "../constants/array";
import Seven from "../sectionSeven";
import Button from "../button";
import MensClothing from "./mensClothing";
import ProductDescription from "../ProductDecsription";

const ProductDetails = () => {

    return (
        <div className="productdetails">
            <Navbar2 />
            <MensClothing />
            <ProductDescription />
            <div className="related-products">
            <ul>
                {products?.map((item) => (
                    <li key={item?.id}>
                        <div className='img-container'>
                            <img src={item?.image} alt="images" />
                        </div>
                        <h4>{item?.text}</h4>
                        <p>{item?.price}</p>
                    </li>
                ))}
            </ul>
        </div>
            <div className="discount">
                <div className="content">
                    <h2>Super discount on more than 100 USD</h2>
                    <p>Have you ever finally just write dummy info</p>
                </div>
                <Button className="shopbutton" value="Shop now" />
            </div>
            <Seven />
        </div>
    )
}
export default ProductDetails;