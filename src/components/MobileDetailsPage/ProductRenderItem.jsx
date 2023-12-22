import React, { useState } from "react";
import { Link } from "react-router-dom";


const ProductRenderItem = ({ item, favorite, wishlist }) => {

    const [isFavorited, setIsFavorited] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }
    const { image,title, category, } = item;
    return (

        <li>
            <div className="imagecontainer">
                <Link to="/productDetails">
                    <img src={image} alt="images" />
                </Link>
            </div>
            <div className='text'>
                <div className="flex-items">
                    <p>{category}</p>
                    <p>{title}</p>
                </div>
                {isFavorited ?
                    (<span onClick={toggleFavorite}>
                        <img src={favorite} alt="fav" className='fav'
                        />
                    </span>) : (
                        <span onClick={toggleFavorite}>
                            <img src={wishlist} alt="icon" className='fav'
                            />
                        </span>
                    )}
            </div>
        </li>
    )
}
export default ProductRenderItem;