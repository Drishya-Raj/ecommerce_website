import * as images from "../images";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const ListViewContent = ({ item, wishlist, favorite }) => {

    const [isFavorited, setIsFavorited] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }

    const { image, price, link, description } = item;
    return (

        <div className='filter'>
            <div className="listviewcontent">
                <ul>
                    <li>
                        <div className='imgContainer'>
                            <Link to="/productDetails">
                                <img src={image} alt="images" />
                            </Link>
                        </div>
                        <div className='content'>
                            <div className='items'>
                                <p id="content">{price}</p>
                                <div className='price'>
                                    <h4>$ 991.8</h4>
                                    <h5>{price}</h5>
                                </div>
                                <div className='rating'>
                                    <img src={images.star} alt="rating" className='star' />
                                    <p id="number">4.5</p>
                                    <img src={images.dot2} alt="dot" />
                                    <p id="order">154 orders</p>
                                    <img src={images.dot2} alt="dot" />
                                    <p id="text1">free shipping</p>
                                </div>
                                <p id="text2">{description}</p>
                                <p id="link">{link}</p>
                            </div>
                            <div>
                                {isFavorited ?
                                    (<span onClick={toggleFavorite}>
                                        <img src={wishlist} alt="fav" className='fav'
                                        />
                                    </span>) : (
                                        <span onClick={toggleFavorite}>
                                            <img src={favorite} alt="icon" className='fav'
                                            />
                                        </span>
                                    )}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ListViewContent;

