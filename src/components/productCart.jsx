import ProductRenderItem from "./RenderItem";
import { Products } from "./constants/array";

const ProductCart = () => {

   

    return (
        <div className="productCart">
            <ul>
                {Products.map((item, index) => {
                    return <ProductRenderItem key={index} item={item} 
                   
                    // addToCart={addToCart}
                    // removeFromCart={removeFromCart}
                    />
                })}
            </ul>
        </div>
    )
}
export default ProductCart;