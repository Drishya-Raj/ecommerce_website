import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Router";

const ProductRenderItem = ({ item, favorite, wishlist }) => {

    const [isFavorited, setIsFavorited] = useState(false);
    const {  setProductId } = useContext(cartContext);
    const navigate = useNavigate();

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }
   
    const navigateToProduct = () => {
        navigate('/productDetails')
        { id && setProductId(id) }
     
    }
    const { image, title, category, price, id } = item;
    return (

        <li>
            <div className="imagecontainer">
                <div onClick={navigateToProduct} >
                    <img src={image} alt="images" />
                </div>
            </div>
            <div className='text'>
                <div className="flex-items">
                    <p>{category}</p>
                    <p>{title}</p>
                    <p>{price}</p>
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