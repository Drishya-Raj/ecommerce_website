import React from "react";
import { products } from "../constants/array";
import Seven from "../HomePage/sectionSeven";
import Button from "../button";
import MensClothing from "../MensPage/mensClothing";
import ProductDescription from "../MensPage/ProductDecsription";
import Navbar from "../navbar";
import NavItem from "../navItems";

const ProductDetails = () => {

    return (
        <div className="productdetails">
            <Navbar search={false} />
            <NavItem />
            <MensClothing />
            <ProductDescription />
            <div className="related-products">
                <ul>
                    {products?.map((item) => {
                        const { id, image, text, price } = item
                        return (
                            <li key={id}>
                                <div className='img-container'>
                                    <img src={image} alt="images" />
                                </div>
                                <h4>{text}</h4>
                                <p>{price}</p>
                            </li>
                        )})}
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