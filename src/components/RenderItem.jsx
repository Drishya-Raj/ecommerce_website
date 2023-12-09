import { useState } from "react";


const ProductRenderItem = ({ item, }) => {

    const [isFavorited, setIsFavorited] = useState(false);
    const [favorites , setFavorites] = useState([]);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }
    // const addToCart = () => {
    //     setFavorites(Products)
    // }
    // console.log("favorites", favorites);  
       

    return (
        <li>
            <div className="imagecontainer">
                <img src={item.image} alt="images" />
            </div>
            <div className='text'>
                <div className="flex-items">
                    <div className='price'>
                        <p>{item.price1}</p>
                        <s>{item.oldprice}</s>
                    </div>
                    <img src={item.star} alt="rating" />
                    <p>{item.text}</p>
                </div>
                {isFavorited ?
                    (<span onClick={toggleFavorite}>
                        <img src={item.favorite} alt="fav" className='fav'
                        />
                    </span>) : (
                        <span onClick={toggleFavorite}>
                            <img src={item.wishlist} alt="icon" className='fav'
                             />
                        </span>
                    )}

            </div>
        </li>

    )
}
export default ProductRenderItem;