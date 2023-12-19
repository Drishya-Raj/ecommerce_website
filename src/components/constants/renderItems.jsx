import { delivery } from "./array";


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









