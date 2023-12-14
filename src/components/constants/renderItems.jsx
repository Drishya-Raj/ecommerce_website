import { delivery } from "./array";
import { products } from './array';
import { useState } from "react";

export const DeliveryItems = () => {
  
    return (
        <div className="deliveryItem">
            <ul>
                {delivery?.map((item) =>
                    <li>
                        <div className='imgcontainer'>
                            <img src={item?.image} alt="image2" className='img2' />
                        </div>
                        <div className='text'>
                            <h4>{item?.text1}</h4>
                            <p>{item?.text2}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

const ProductRenderItem = ({ item, }) => {

    const [isFavorited, setIsFavorited] = useState(false);
    const [favorites , setFavorites] = useState([]);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }
    return (
        <li>
            <div className="imagecontainer">
                <img src={item?.image} alt="images" />
            </div>
            <div className='text'>
                <div className="flex-items">
                    <div className='price'>
                        <p>{item?.price1}</p>
                        <s>{item?.oldprice}</s>
                    </div>
                    <img src={item?.star} alt="rating" />
                    <p>{item?.text}</p>
                </div>
                {isFavorited ?
                    (<span onClick={toggleFavorite}>
                        <img src={item?.favorite} alt="fav" className='fav'
                        />
                    </span>) : (
                        <span onClick={toggleFavorite}>
                            <img src={item?.wishlist} alt="icon" className='fav'
                             />
                        </span>
                    )}
            </div>
        </li>

    )
}
export default ProductRenderItem;




