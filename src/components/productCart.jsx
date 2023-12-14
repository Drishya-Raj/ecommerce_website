import ProductRenderItem from "./constants/renderItems";
import { Products } from "./constants/array";

const ProductCart = () => {

    return (
        <div className="productCart">
            <ul>
                {Products.map((item, index) => {
                    return <ProductRenderItem key={index} item={item} 
                   
                    />
                })}
            </ul>
        </div>
    )
}
export default ProductCart;