import React, { useState } from "react";


const ProductRenderItem = ({item, favorite, wishlist}) => {

    const [isFavorited, setIsFavorited] = useState(false);
    // const [favorites, setFavorites] = useState([]);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }
    const { image, price1, oldprice, title, category,  } = item;
    return (
        <li>
            <div className="imagecontainer">
                <img src={image} alt="images" />
            </div>
            <div className='text'>
                <div className="flex-items">
                    <div className='price'>
                        <p>{price1}</p>
                        <s>{oldprice}</s>
                    </div>
                    <p>{category}</p>
                    {/* <img src={star} alt="rating" /> */}
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