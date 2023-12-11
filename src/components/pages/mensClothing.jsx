import * as images from '../images';
import { supplier } from '../constants/array';
import Button from '../button';
import { priceDetails } from '../constants/array';
import { tableDetails } from '../constants/array';
import { reviews } from '../constants/array';
import { imageItems } from '../constants/array';

 const MensClothing = () =>{
    return(
    
    <div className="Mens">
    <div className="tshirt">
        <div className="imgContainer">
            <img src={images?.tshirts} alt="image34" />
        </div>
        <div className="parts">
            {imageItems?.map((item) => (
                <img key={item.key} src={item?.image} alt="images" />
            ))}
        </div>
    </div>
    <div className="info">
        <p>
            <img src={images?.tick} alt="check" /> In stock
        </p>
        <h4>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h4>
        <div className='middle'>
            <div className="rating">
                {reviews.map((item) => (
                    <div key={item.id}>
                        <img src={item?.image} alt="images" />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="trade">
                {priceDetails.map((item) => (
                    <div className='price' key={item.key}>
                        <h3>{item.price}</h3>
                        <p>{item.pieces}</p>
                    </div>
                ))}
            </div>
            <div className="grid-items">
                {tableDetails.map((item) => (
                    <p key={item.id}>{item.text}</p>
                ))}
            </div>
        </div>
    </div>
    <div className="right-section">
        <div className="right">
            <div className="seller-details">
                <img src={images?.rimg} alt="rimg" className="rimg" />
                <div className="sellers">
                    <p>Supplier</p>
                    <p> Guanjoi Trading LLC</p>
                </div>
            </div>
            {supplier?.map((item) => (
                <p key={item.id}>
                    <img src={item?.image} alt="germany" />
                    {item.text}
                </p>
            ))}
            <div className="send">
               <Button value="Send Enquiry" />
            </div>
            <div className="selers">
                <Button value="Seller's Profile" />
            </div>
        </div>
        <div className="save">
            <img src={images?.fav} alt="fav" />
            <h3> Save for later</h3>
        </div>
    </div>
</div>
    )
}
export default MensClothing;