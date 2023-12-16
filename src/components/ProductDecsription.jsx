import AsideItems from "./asideItems";
import { data, dataInfo } from "./constants/array";
import { checklist } from "./constants/array";

const ProductDescription = () => {
   
    return (
        <div className="prod-left">
            <div className="productdescription">
                <div className='prodNav'>
                    <ul>
                        <li> Description </li>
                        <li>Reviews</li>
                        <li>Shipping</li>
                        <li>About Seller</li>
                    </ul>
                </div>
                <div className="description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        Quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="modal-grid">
                    {dataInfo?.map((item) => (
                        <div key={item.id} className="grid">
                            <p className="head">{item?.head}</p>
                            <p className="col">{item?.col}</p>
                        </div>
                    ))}
                </div>
                <div className="checklist">
                    {checklist?.map((item) => (
                        <p>
                            <img src={item?.image} alt="check" />
                            {item?.text}
                        </p>
                    ))}
                </div>
            </div>
            <AsideItems />
        </div>
    )
}
export default ProductDescription;