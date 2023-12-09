import { delivery } from "./array";
import { products } from './array';

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
const RelatedProducts = () => {
    
    return (
        <div className="related-products">
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <div className='img-container'>
                            <img src={item.image} alt="images" />
                        </div>
                        <h4>{item.text}</h4>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RelatedProducts;




