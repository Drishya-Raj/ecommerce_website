import * as images from "../images";
import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Router";

const ListViewContent = ({ item, wishlist, favorite }) => {

    const [isFavorited, setIsFavorited] = useState(false);
  const {setProductId} = useContext(cartContext);
   const navigate = useNavigate();
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }
    const navigateToProduct = () => {
        navigate('/productDetails')
        { id && setProductId(id) }

    }
    const { image, price, link, description,id } = item;
    return (

        <div className='filter'>
            <div className="listviewcontent">
                <ul>
                    <li key={id}>
                        <div className='imgContainer'>
                            <div onClick={navigateToProduct} >
                                <img src={image} alt="images" />
                            </div>
                        </div>
                        <div className='content'>
                            <div className='items'>
                                <p id="content"></p>
                                <div className='price'>
                                    <h4>{price}</h4>
                                    <h5>$ 991.8 </h5>
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

