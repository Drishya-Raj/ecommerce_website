import React from "react";
import Navbar2 from "../navBar2";
import RelatedProducts from "../constants/renderItems";
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
            <RelatedProducts />
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